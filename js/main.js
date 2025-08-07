let captionMap = new Map();
captionMap.set('kitten', [
    'Đáng yêu quá',
    'Đáng yêu ghê',
    'Đáng yêu xĩu',
    'Đáng yêu quá đi',
    'Đáng yêu quá trời',
    'Cưng quá',
    'Cưng ghê',
    'Cưng xĩu',
    'Cưng quá đi',
    'Cưng quá trời',
    'Xinh quá',
    'Xinh ghê',
    'Xinh xĩu',
    'Xinh quá đi',
    'Xinh quá trời',
    'Dễ thương ghê',
    'Dễ thương xĩu',
    'Dễ thương quá đi',
    'Dễ thương quá trời'
]);
captionMap.set('puppy', [
    'Đáng yêu quá',
    'Đáng yêu ghê',
    'Đáng yêu xĩu',
    'Đáng yêu quá đi',
    'Đáng yêu quá trời',
    'Cưng quá',
    'Cưng ghê',
    'Cưng xĩu',
    'Cưng quá đi',
    'Cưng quá trời',
    'Xinh quá',
    'Xinh ghê',
    'Xinh xĩu',
    'Xinh quá đi',
    'Xinh quá trời',
    'Dễ thương ghê',
    'Dễ thương xĩu',
    'Dễ thương quá đi',
    'Dễ thương quá trời'
]);
captionMap.set('funny', [
    'Ối dồi ôi',
    'Không ngờ tới phải không',
    'Ngu người',
    'Nước đi này tại hạ chưa tính tới',
    'Chịu luôn',
    'Cạn lời',
    'Quả là cao kiến',
    'Không thể ngờ được'
]);

let emojiMap = new Map();
emojiMap.set('kitten', [
    '🥰',
    '😍',
    '😘',
    '😻'
]);
emojiMap.set('puppy', [
    '🥰',
    '😍',
    '😘'
]);
emojiMap.set('funny', [
    '😂',
    '🤣',
    '🥲',
    '😅',
    '😳',
    '😎',
    '😆',
    '😏'
]);

let hashtagsMap = new Map();
hashtagsMap.set('kitten', [
    '#cat',
    '#catlover',
    '#kitty',
    '#kitten',
    '#meow',
    '#catlife',
    '#catlovers',
    '#catoftheday',
    '#kittens',
    '#cutecat',
    '#ilovemycat',
    '#lovecats',
    '#kittycat',
    '#cutecats',
    '#catloversclub',
    '#caturday',
    '#catphoto',
    '#ilovecats',
    '#bestmeow',
    '#mycat',
    '#catslover',
    '#catsofworld',
    '#tabbycat',
    '#kittylove',
    '#tabby',
    '#catsoftheworld',
    '#catscatscats',
    '#kitties',
    '#catsoftheday',
    '#fluffycat',
    '#whitecat',
    '#kittenlove',
    '#purr',
    '#catworld',
    '#siamesecat',
    '#catslovers',
    '#happycat',
    '#purrfect',
    '#catsrule',
    '#catselfie',
    '#meowdel',
    '#catlifestyle',
    '#greycat',
    '#catoftheworld',
    '#catpic',
    '#catslove'
]);
hashtagsMap.set('puppy', [
    '#dog',
    '#puppy',
    '#pet',
    '#doglover',
    '#pets',
    '#puppylove',
    '#dogoftheday',
    '#doglife',
    '#doglovers',
    '#puppies',
    '#ilovemydog',
    '#doggo',
    '#rescuedog',
    '#dogslife',
    '#doglove',
    '#doggy',
    '#lovedogs',
    '#pup',
    '#cutedog',
    '#dogphotography',
    '#cutedogs',
    '#happydog',
    '#dogmom',
    '#puppyoftheday',
    '#dogmodel',
    '#lovemydog',
    '#dogsitting',
    '#cutepuppy',
    '#doggie',
    '#puppydog',
    '#ilovedogs',
    '#dogscorner',
    '#mydogiscutest',
    '#pupper',
    '#dailydog',
    '#happydogs',
    '#dogslover',
    '#pups',
    '#cutepuppies',
    '#doggies',
    '#dogstyle',
    '#dogsandpals',
    '#bestdog',
    '#doggos',
    '#puppylover',
    '#dogsdaily',
    '#ilovemydogs',
    '#dogsrule',
    '#doggylove',
    '#dogsoftheday',
    '#dogsonadventures',
    '#dogfriends',
    '#dogworld',
    '#puppys',
    '#dogsmile',
    '#dogselfie',
    '#puppylovers',
    '#dogsworld',
    '#doglifestyle',
    '#dogfeatures',
    '#dogsoftheworld',
    '#dogloversclub',
    '#dogdaily',
    '#dogfamily',
    '#dogpics',
    '#dogvideo'
]);
hashtagsMap.set('funny', [
    '#fun',
    '#memes',
    '#meme',
    '#lol',
    '#comedy',
    '#humor',
    '#funnymemes',
    '#dankmemes',
    '#memesdaily',
    '#funnyvideos',
    '#lmao',
    '#dank',
    '#crazy',
    '#laugh',
    '#relatable',
    '#haha',
    '#edgymemes',
    '#jokes',
    '#offensivememes',
    '#memepage',
    '#dailymemes',
    '#funnymeme',
    '#epic',
    '#cringe',
    '#lmfao',
    '#memer',
    '#joke',
    '#comedyvideos',
    '#funnyvideo',
    '#spicymemes',
    '#laughing',
    '#memeaccount',
    '#relatablememes',
    '#memelord',
    '#dankmemesdaily',
    '#hahaha',
    '#memez',
    '#bestmemes',
    '#darkhumor',
    '#darkmemes',
    '#funnyposts',
    '#laughs',
    '#funnypictures',
    '#bruh',
    '#stupid',
    '#memesquad',
    '#funnyquotes',
    '#spongebobmemes',
    '#memesrlife',
    '#edgymeme',
    '#memedaily',
    '#memegod',
    '#comedyvideo',
    '#memelife',
    '#memeoftheday',
    '#memesfordays',
    '#joking',
    '#rofl',
    '#comedymemes',
    '#funnymemesdaily',
    '#hilariousmemes',
    '#laughoutloud',
    '#goodmemes',
    '#funnypost',
    '#memetime',
    '#funnyclips',
    '#funnypics',
    '#memevideo',
    '#dailymeme',
    '#sofunny',
    '#wtfmemes',
    '#lolz',
    '#memepages',
    '#dumb',
    '#memereview',
    '#memed',
    '#funnypic',
    '#funnyvids',
    '#funn',
    '#pranks',
    '#epicmemes',
    '#funnystuff',
    '#originalmemes',
    '#funnyvines'
]);

function getRandomTopicCaption(topic) {
    const captions = captionMap.get(topic);

    if (!captions || captions.length === 0) return "";

    const randomIndex = Math.floor(Math.random() * captions.length);

    return captions[randomIndex];
}


function getRandomTopicEmoji(topic) {
    const emojis = emojiMap.get(topic);

    if (!emojis || emojis.length === 0) return "";

    const randomIndex = Math.floor(Math.random() * emojis.length);

    return emojis[randomIndex];
}

function getRandomTopicHashtags(topic) {
    const hashtags = hashtagsMap.get(topic).filter((word) => /^#[a-zA-Z0-9_]+$/.test(word));

    if (hashtags.length <= 5) return [...new Set(hashtags)].join(" ");

    const uniqueHashtags = [...new Set(hashtags)];
    const randomHashtags = [];

    while (randomHashtags.length < 5 && uniqueHashtags.length > 0) {
        const randomIndex = Math.floor(Math.random() * uniqueHashtags.length);
        randomHashtags.push(uniqueHashtags[randomIndex]);
        uniqueHashtags.splice(randomIndex, 1);
    }

    return randomHashtags.join(" ");
};

const generate = document.getElementById("generate");
const copy = document.getElementById("copy");
const caption = document.getElementById("caption");

generate.addEventListener("click", function () {
    const topic = document.getElementById("topic").value;

    if (topic === "") {
        caption.value = "";
    } else {
        caption.value = getRandomTopicCaption(topic) + " " + getRandomTopicEmoji(topic) + " " + getRandomTopicHashtags(topic) + " ";
    }

    generate.innerHTML = '<i class="fa-solid fa-paper-plane me-2"></i><span>Generated</span>';
    setTimeout(() => {
        generate.innerHTML = '<i class="fa-solid fa-paper-plane me-2"></i><span>Generate</span>';
    }, 600);
});

copy.addEventListener("click", function () {
    caption.select();
    caption.setSelectionRange(0, 99999);

    document.execCommand("copy");
    navigator.clipboard.writeText(caption.value);

    copy.innerHTML = '<i class="fa-solid fa-copy me-2"></i><span>Copied</span>';
    setTimeout(() => {
        copy.innerHTML = '<i class="fa-solid fa-copy me-2"></i><span>Copy</span>';
    }, 600);
});