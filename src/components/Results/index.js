import React from 'react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import Divider from '@material-ui/core/Divider';
import './Results.css';

const Results = ({ contacts, inputValue }) => {
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
                    <ImageIcon />
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
                    <ImageIcon />
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