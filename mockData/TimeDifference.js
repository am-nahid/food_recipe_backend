// Function to format the time difference
function formatTimeDifference(timestamp) {
    const currentTime = new Date();
    const commentTime = new Date(timestamp);
    const timeDifference = currentTime - commentTime;
  
    const seconds = Math.floor(timeDifference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
  
    if (seconds < 60) {
      return `${seconds} sec${seconds !== 1 ? "s" : ""} ago`;
    } else if (minutes < 60) {
      return `${minutes} min${minutes !== 1 ? "s" : ""} ago`;
    } else if (hours < 24) {
      return `${hours} hour${hours !== 1 ? "s" : ""} ago`;
    } else {
      return `${days} day${days !== 1 ? "s" : ""} ago`;
    }
  }
  

  



  // different schema
  const commentsSchema = new mongoose.Schema({
    comment: String,
    user_id: String,
    recipeName: String,
    commentTimestamp:String,
})