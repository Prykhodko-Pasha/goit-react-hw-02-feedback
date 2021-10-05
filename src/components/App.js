import React from 'react';

export default class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    return (
      <>
        <Profile
          name={user.name}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />

        <Statistics title="Upload stats" stats={statisticalData} />
        <Statistics stats={statisticalData} />

        <FriendList friends={friends} />

        <TransactionHistory items={transactions} />
      </>
    );
  }
}
