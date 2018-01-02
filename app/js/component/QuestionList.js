var React = require('react');
var QuestionItem = require('./QuestionItem.js');

module.exports = React.createClass({
  render:function(){
    // 接收父组件值
    var questions = this.props.questions;
    // 如果接收到的question不是数组抛异常
    if(!Array.isArray(questions)) throw new Error('no array');
    // 遍历
    var questionComps = questions.map(function(qst){
      return <QuestionItem key={qst.key} 
            questionKey={qst.key}
            title={qst.title} 
            description={qst.description} 
            voteCount={qst.voteCount} 
            onVote={this.props.onVote} />
            
    });

    return (
      <div id="questions" className="">
         {questionComps}
    </div>
    )
  }
})