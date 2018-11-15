import React from 'react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import PortraitIcon from '@material-ui/icons/Portrait';
import Divider from '@material-ui/core/Divider';
import './Results.css';

const Results = ({ contacts, inputValue }) => {
  function compareStrings(a, b) {
    a = a.toLowerCase();
    b = b.toLowerCase();

    return (a < b) ? -1 : (a > b) ? 1 : 0;
  }

  contacts.sort(function(a, b) {
    return compareStrings(a.name, b.name);
  })

  var filteredContacts = contacts.filter((contact) => {
    return contact.name.toLowerCase().indexOf(inputValue.toLowerCase()) !== -1;
    }
  );
  return (
    <div className="App-Results">
      <h2>Liste des contacts</h2>
      {inputValue === "" && <List>
        {contacts.map((contact, i) => {
            return (
              <div className="App-Result">
                <ListItem>
                  <Avatar>
                    <PortraitIcon />
                  </Avatar>
                  <ListItemText key={i} primary={contact.name} secondary={contact.number} />
                </ListItem>
                <li>
                  <Divider inset />
                </li>
              </div>
            )
        })}
      </List>}
      {inputValue !== "" && <List>
        {filteredContacts.map((contact, i) => {
          return (
            <div className="App-Result">
                <ListItem>
                  <Avatar>
                    <PortraitIcon />
                  </Avatar>
                  <ListItemText key={i} primary={contact.name} secondary={contact.number} />
                </ListItem>
                <li>
                  <Divider inset />
                </li>
              </div>
          )
        })}
      </List>}
    </div>
  );
};

export default Results;