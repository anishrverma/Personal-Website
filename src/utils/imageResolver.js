const imageUrls = import.meta.glob("../assests/images/*", {
  eager: true,
  import: "default",
  query: "?url",
});

export function resolveImage(filename) {
  const imageUrl = imageUrls[`../assests/images/${filename}`];

  if (!imageUrl) {
    throw new Error(
      `Image "${filename}" was not found in src/assests/images. Check the filename and exact casing.`
    );
  }

  return imageUrl;
}
