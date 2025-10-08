import os
import re

# Path to your build output folder (adjust if needed)
BUILD_DIR = "dist"  # or "build" for CRA
FILES_TO_PATCH = ["index.html", "assets/index.js"]

# Regex to match /assets/... but not // (to avoid messing up URLs)
ASSET_REGEX = re.compile(r'(?<!:)\/assets/')

def patch_file(filepath):
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()

    # Replace /assets/... with ./assets/...
    new_content = ASSET_REGEX.sub("./assets/", content)

    if content != new_content:
        with open(filepath, "w", encoding="utf-8") as f:
            f.write(new_content)
        print(f"✅ Patched paths in {filepath}")
    else:
        print(f"ℹ️ No changes needed in {filepath}")

def main():
    print("🔧 Fixing asset paths...")

    for root, _, files in os.walk(BUILD_DIR):
        for filename in files:
            if filename.endswith(".js") or filename.endswith(".html"):
                path = os.path.join(root, filename)
                patch_file(path)

    print("🎉 Path fix complete.")

if __name__ == "__main__":
    main()
