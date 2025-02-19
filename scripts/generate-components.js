const fs = require("fs");
const path = require("path");

const packageJsonPath = path.resolve(__dirname, "../package.json");
const componentsDir = path.resolve(__dirname, "../src/components");

try {
  const packageJson = require(packageJsonPath);

  // Ensure "exports" field exists
  packageJson.exports = packageJson.exports || {};

  // Add main entry points
  // packageJson.exports["."] = {
  //   import: "./dist/index.mjs",
  //   require: "./dist/index.cjs",
  //   types: "./dist/index.d.ts",
  // };

  // Scan components folder & add them to exports
  const components = fs.readdirSync(componentsDir).filter((component) =>
    fs.statSync(path.join(componentsDir, component)).isDirectory()
  );

  components.forEach((component) => {
    packageJson.exports[`./${component}`] = {
      import: `./dist/components/${component}/index.mjs`,
      require: `./dist/components/${component}/index.cjs`,
      types: `./dist/components/${component}/index.d.ts`,
    };
  });

  // Write back to package.json
  fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));

  console.log("✅ Successfully updated package.json exports!");
} catch (error) {
  console.error("❌ Error updating package.json:", error);
  process.exit(1);
}
