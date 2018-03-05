var Appointment = React.createClass({
  render: function() {
    return (
      <div>
        <AppointmentForm />
        <AppointmentsList appointment={appointments} />
      </div>
      )
    }
});
