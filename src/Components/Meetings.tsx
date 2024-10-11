import React from 'react';
import './Meetings.css';

const PrayerMeetings: React.FC = () => {
  const meetings = [
    {
      id: 1,
      date: 'Oct 12',
      day: 'Saturday',
      title: 'Miracle Fasting Prayer',
      fromTime: '12-10-24 - 10:00 AM',
      toTime: '12-10-24 - 02:00 PM',
      location: 'Vanagaram Prayer Tower, JC Garden, 96, Poonamallee High Road, Vanagaram, Chennai-600095',
    },
    {
      id: 2,
      date: 'Nov 02',
      day: 'Saturday',
      title: 'Bethesda Blessing Meeting',
      fromTime: '02-11-24 - 02:00 PM',
      toTime: '02-11-24 - 05:30 PM',
      location: 'Dr.D.G.S. Dhinakaran Centre, Karunya Nagar, Coimbatore-641114',
    },
  ];

  return (
    <div className="prayer-meetings-container">
      <div className="heading">
        <h2>Upcoming Prayer Meetings</h2>
        <button className="view-all-button">View all</button>
      </div>
      <div className="meetings-list">
        {meetings.map(meeting => (
          <div key={meeting.id} className="meeting-card">
            <div className="meeting-date">
              <span className="date">{meeting.date}</span>
              <span className="day">{meeting.day}</span>
            </div>
            <div className="meeting-details">
              <h3>{meeting.title}</h3>
              <p>
                From: {meeting.fromTime} <br />
                To: {meeting.toTime} <br />
                {meeting.location}
              </p>
            </div>
            {meeting.title === 'Bethesda Blessing Meeting' && (
              <button className="direction-button">Direction</button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PrayerMeetings;
