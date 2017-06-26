import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';
import "./body.html";
import { Contacts } from './api/contacts.js'


var toggletext = 1;

Template.body.helpers({
    contacts()
    {
        return Contacts.find({})
    },
}),


Template.body.events({

    
    'click #addcontact'(event){
        toggletext++;
        $('#toggleme').toggle();
        if (toggletext%2 == 0)
            $('#addcontact').text("Done");
        else
            $('#addcontact').text("Add Contact");
    },

    'click .toggle-checked removed'(event){
    Contacts.update(this._id, {
      $set: { checked: ! this.checked }})
    },

    'click #removecontact'(event){
        Contacts.remove(this._id);
    },

    'click #saveadd'(event){
        var name = $('#name').val();
        var phone = $('#phone').val();
        var email = $('#email').val();

        Contacts.insert({
            name,
            phone,
            email,
        });
    }
})


