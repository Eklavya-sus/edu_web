// document.addEventListener("DOMContentLoaded", function () {
//     const videosContainer = document.querySelector(".videos-container");
//     const usersJsonFile = "sample.json";
//     fetch(usersJsonFile)
//         .then((response) => response.json())
//         .then((data) => {
//             const videos = data.videos;
//             const users = data.users;
//             videos.forEach((video) => {
//                 const uploadedByUser = users.find((user) => user.id === video.uploadedBy);
//                 const videoCard = createVideoCard(video, uploadedByUser);
//                 videosContainer.appendChild(videoCard);
//             });
//         })
//     function createVideoCard(video, uploadedByUser) {
//         const videoCard = document.createElement("div");
//         videoCard.classList.add("video-card");

//         const videoTitle = document.createElement("h2");
//         videoTitle.textContent = video.title;
//         videoCard.appendChild(videoTitle);

//         const videoDescription = document.createElement("p");
//         videoDescription.textContent = video.description;
//         videoCard.appendChild(videoDescription);

//         const videoTags = document.createElement("ul");
//         video.tags.forEach((tag) => {
//             const tagItem = document.createElement("li");
//             tagItem.textContent = tag;
//             videoTags.appendChild(tagItem);
//         });
//         videoCard.appendChild(videoTags);

//         const videoUploadedBy = document.createElement("p");
//         videoUploadedBy.textContent = `Uploaded by ${uploadedByUser.username}`;
//         videoCard.appendChild(videoUploadedBy);

//         const videoUploadedDate = document.createElement("p");
//         videoUploadedDate.textContent = `Uploaded Date: ${video.uploadedDate}`;
//         videoCard.appendChild(videoUploadedDate);

//         return videoCard;
//     }
// });
