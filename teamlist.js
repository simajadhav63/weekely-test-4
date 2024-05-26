import React from 'react';

const TeamList = ({ team, removeFromTeam }) => {
  const averageAge = team.length > 0 ? (team.reduce((sum, member) => sum + member.age, 0) / team.length).toFixed(2) : 0;

  return (
    <div className="team-list">
      <h1>Team Members</h1>
      <ul>
        {team.map(member => (
          <li key={member.id}>
            {member.first_name} {member.last_name} - Age: {member.age}
            <buttons onClick={() => removeFromTeam(member)}>REMOVE</buttons>
          </li>
        ))}
      </ul>
      <div id='ag'>Average Age: {averageAge}</div>
    </div>
  );
};

export default TeamList;
