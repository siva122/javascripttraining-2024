console.log('start');
// login
// get tweets
// get tweet comments

function login(uname, password, callback) {
  setTimeout(() => {
    const loginMessage = { uId: 344, isSuccess: true };
    callback(loginMessage);
  }, 2000);
}
function getTweets(uId, callback) {
  setTimeout(() => {
    const tweets = { tId: 1, tweetData: 'hi how are you' };
    callback(tweets);
  }, 1000);
}
function getTweetComments(tweetId, callback) {
  setTimeout(() => {
    const tweetComments = { tcommentId: 1, commentData: 'nice post' };
    callback(tweetComments);
  }, 1000);
}
login('siva123', 'random123', (message) => {
  console.log(message);
  getTweets(message.uId, (tweetsData) => {
    console.log(tweetsData);
    getTweetComments(tweetsData.tId, (tweetCommentData) => {
      console.log(tweetCommentData);
    });
  });
});
//console.log(message);
console.log('end');
