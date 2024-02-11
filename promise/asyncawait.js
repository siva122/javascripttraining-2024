console.log('start');
// login
// get tweets
// get tweet comments

function login(uname, password) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      const loginMessage = { uId: 344, isSuccess: true };
      if (uname === 'siva123' && password === 'random123') {
        resolve(loginMessage);
      } else {
        reject(new Error('error in login'));
      }
    }, 2000);
  });
}
function getTweets(uId) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      const tweets = { tId: 1, tweetData: 'hi how are you' };
      resolve(tweets);
      //reject('error getting tweets');
    }, 1000);
  });
}
function getTweetComments(tweetId) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      const tweetComments = { tcommentId: 1, commentData: 'nice post' };
      resolve(tweetComments);
    }, 1000);
  });
}
//calback hell
// login('siva123', 'random123', (message) => {
//   console.log(message);
//   getTweets(message.uId, (tweetsData) => {
//     console.log(tweetsData);
//     getTweetComments(tweetsData.tId, (tweetCommentData) => {
//       console.log(tweetCommentData);
//     });
//   });
// });
//promise

// login('siva123', 'random123').then((data) => {
//   console.log(data);
//   getTweets(data.uId).then((tweetsData) => {
//     console.log(tweetsData);
//     getTweetComments(tweetsData.tId).then((tweetsCommentData) => {
//       console.log(tweetsCommentData);
//     });
//   });
// });
// login('siva123', 'random12345')
//   .then((data) => getTweets(data.uId))
//   .then((tweetsData) => {
//     console.log(tweetsData);
//     return getTweetComments(tweetsData.tId);
//   })
//   .then((tweetsCommentData) => {
//     console.log(tweetsCommentData);
//   })
//   .catch((error) => {
//     console.log(error.message);
//   });
//console.log(message);
console.log('end');
// async and await

async function result() {
  try {
    const data = await login('siva123', 'random123');
    console.log(data);
    const tweetdata = await getTweets(data.uId);
    const tweetcommentdata = await getTweetComments(tweetdata.tId);
    console.log(tweetcommentdata);
  } catch (error) {
    console.log(error);
  }
}
result();
