var AppointmentForm = React.createClass({
  handleChange: function() {
    var name = e.target.name;
    obj = {};
    obj[name] e.target.value;
    this.props.onUserInput(obj);
  },

  handleSubmit: function(e) {
    e.preventDefault();
    this.props.onFormSubmit();
  },

    render: function() {
      return (
      <div>
        <h2>Make a new appointment</h2>
        <form onSubmit={this.handleSubmit}>
        <form>
          <input name='title' placeholder='Appointment Title'
            value={this.props.input_title}
            onChange={this.handleChange} />
          <input name='appt_time' placeholder='Date and Time'
            value={this.props.input_appt_time}/>
            onChange={this.handleChange} />
          <input type='submit' value='Make Appointment' className='submit-button' />
        </form>
      </div>
    )
  }
});
