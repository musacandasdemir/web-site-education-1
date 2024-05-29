// API çağrılarını yapacak olan sınıf
class PhotoService {
    constructor(apiUrl) {
        this.apiUrl = apiUrl;
    }

    async getPhotos() {
        try {
            const response = await fetch(this.apiUrl);
            console.log(response);
            console.log(fetch.ok);

            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            const photos = await response.json();
            return photos;
        } catch (error) {
            console.error('Fetching photos failed:', error);
            return [];
        }
    }
}

// Fotoğrafları tablo içinde görüntülemek için fonksiyon
function displayPhotos(photos) {
    const photoTbody = document.getElementById('photo-tbody');
    photoTbody.innerHTML = ''; // Önceki içeriği temizle

    photos.forEach(photo => {
        const row = document.createElement('tr');

        const photoTd = document.createElement('td');
        const photoImg = document.createElement('img');
        photoImg.src = photo.thumbnailUrl;
        photoImg.alt = photo.title;
        photoTd.appendChild(photoImg);

        const titleTd = document.createElement('td');
        titleTd.textContent = photo.title;

        row.appendChild(photoTd);
        row.appendChild(titleTd);
        photoTbody.appendChild(row);
    });
}

// Ana fonksiyon
async function main() {
    const photoService = new PhotoService('https://jsonplaceholder.typicode.com/photos');
    const photos = await photoService.getPhotos();
    displayPhotos(photos);
}

// Sayfa yüklendiğinde ana fonksiyonu çalıştır
document.addEventListener('DOMContentLoaded', main);
