// js/news.js

const apiKey = "061a9dbd3e224405b1a6b04f4d201a63";
const url = `https://newsapi.org/v2/everything?q=cybersecurity&language=en&sortBy=publishedAt&pageSize=5&apiKey=${apiKey}`;

fetch(url)
  .then(res => res.json())
  .then(data => {
    const list = document.getElementById("news-list");
    list.innerHTML = "";

    if (data.articles && data.articles.length > 0) {
      data.articles.forEach(article => {
        const li = document.createElement("li");
        li.innerHTML = `<a href="${article.url}" target="_blank">${article.title}</a>`;
        list.appendChild(li);
      });
    } else {
      list.innerHTML = "<li>कोई ताज़ा खबर नहीं मिली</li>";
    }
  })
  .catch(err => {
    console.error("News API Error:", err);
    document.getElementById("news-list").innerHTML = "<li>News लोड नहीं हो सकी</li>";
  });
