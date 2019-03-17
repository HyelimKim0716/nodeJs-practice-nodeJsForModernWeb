const cheerio = require('cheerio');
const request = require('request');

const targetUrl = 'http://www.hanbit.co.kr/media/books/new_book_list.html';
request(targetUrl, function (error, response, body) {
    // load() 메서드로 응답받은 내용을 jQuery 객체로 변환
    var $ = jQuery = cheerio.load(body);

    $('.sub_book_list').each(function (item) {
        const title = $(this).find('.book_tit').text().trim();
        let writer = $(this).find('.book_writer').text().trim();

        // 저자 정보 분해
        writer = writer.split(",").map(function (item) {
            return item.trim();
        });

        console.log(title);
        console.log(writer);
        console.log();
    })
});
