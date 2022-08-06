function fetchImage(galleryItem, numberPage) {
  const Key = '28091582-4f46659dd3a5179a3fd2eadd3';
  return fetch(
    `https://pixabay.com/api/?q=${galleryItem}&page=${numberPage}&key=${Key}&image_type=photo&orientation=horizontal&per_page=12`
  )
    .then(response => response.json())
    .then(gallery => gallery.hits);
}

const Api = {
  fetchImage,
};

export default Api;
