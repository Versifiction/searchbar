import React from 'react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import PortraitIcon from '@material-ui/icons/Portrait';
import female from '../../images/female.png';
import male from '../../images/male.png';
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

  var filteredContactsNames = contacts.filter((contact) => {
    return contact.name.toLowerCase().indexOf(inputValue.toLowerCase()) !== -1;
    }
  );

  var filteredContactsNumbers = contacts.filter((contact) => {
    return contact.number.toLowerCase().indexOf(inputValue.toLowerCase()) !== -1;
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
                  <Avatar
                    alt={contact.name}
                    src={contact.sexe === "female" ? female : male}
                  >
                    <PortraitIcon />
                  </Avatar>
                  <ListItemText key={i} primary={contact.name} secondary={contact.number} />
                </ListItem>
              </div>
            )
        })}
      </List>}
      {inputValue.charAt(0) === "0" && <List>
        {filteredContactsNumbers.map((contact, i) => {
          return (
            <div className="App-Result">
                <ListItem>
                  <Avatar
                    alt={contact.name}
                    src={contact.sexe === "female" ? female : male}
                  >
                    <PortraitIcon />
                  </Avatar>
                  <ListItemText key={i} primary={contact.name} secondary={contact.number} />
                </ListItem>
              </div>
          )
        })}
      </List>}
      {inputValue !== "" && <List>
        {filteredContactsNames.map((contact, i) => {
          return (
            <div className="App-Result">
                <ListItem>
                  <Avatar
                    alt={contact.name}
                    src={contact.sexe === "female" ? female : male}
                  >
                    <PortraitIcon />
                  </Avatar>
                  <ListItemText key={i} primary={contact.name} secondary={contact.number} />
                </ListItem>
              </div>
          )
        })}
      </List>}
    </div>
  );
};

export default Results;