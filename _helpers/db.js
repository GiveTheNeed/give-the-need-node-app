const mongoose = require('mongoose');
const connectionOptions = { useNewUrlParser: true, useUnifiedTopology: true };
mongoose.connect(process.env.MONGODB_URI, connectionOptions);
mongoose.Promise = global.Promise;

module.exports = {
    User: require('../modules/users/user.model'),
    Youth: require('../modules/youth/youth.model'),
    Tutor: require('../modules/tutor/tutor.model'),
    Token: require('../modules/token/token.model'),
    Banner: require('../modules/banner/banner.model'),
    // Event: require('../modules/event/event.model'),
    // Task: require('../modules/task/task.model'),
    // Article: require('../modules/article/article.model'),
    // Podcast: require('../modules/podcast/podcast.model'),
    // QuestionAndAnswer: require('../modules/question-and-answer/question-and-answer.model'),
    // State: require('../modules/state/state.model'),
    // District: require('../modules/district/district.model'),
    // School: require('../modules/school/school.model'),
    // Topic: require('../modules/topic/topic.model'),
    // Communication: require('../modules/communication/communication.model')
};