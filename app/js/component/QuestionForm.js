var React = require('react');

module.exports = React.createClass({
  handleSubmit: function(e){
    //组织默认的submit事件，避免按取消也会提交表单
    e.preventDefault();
    // 避免空提交
    if(!this.refs.title.getDOMNode().value) return;
    var formData = {
      title: this.refs.title.getDOMNode().value,
      description: this.refs.description.getDOMNode().value,
      voteCount: 0
    }
    this.refs.addQuestionForm.getDOMNode().reset();

    // 接收一个callback把值传递到父组件
    this.props.onNewQuestion(formData);
  },
  render:function(){
    var styleObj = {
      display: this.props.formDisplayed ? 'block': 'none'
    }
    return (
      <form ref="addQuestionForm" name="addQuestion" className="clearfix" style={styleObj} onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="qtitle">问题</label>
          <input ref="title" type="text" className="form-control" id="qtitle" placeholder="您的问题的标题" />
        </div>
        <textarea ref="description" className="form-control" rows="3" placeholder="问题的描述"></textarea>
        <button className="btn btn-success pull-right">确认</button>
        <a className="btn btn-default pull-right" onClick={this.props.onToggleForm}>取消</a>
      </form>
    )
  }
})