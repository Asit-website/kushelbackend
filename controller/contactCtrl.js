const Contacts = require("../model/contactModel");

const contactCtrl = {
   createContact : async(req,res) => {
      try {
          const {
              pName, 
              pCompanyName, 
              pWebsite, 
              pDesiginition, 
              pEmailAddress,
              pLocation,
              pEstimatedBudget,
              pPhone,
              pMessage,
              cName,
              cCompanyName,
              cWebsite,
              cDesiginition,
              cEmailAddress,
              cLocation,
              cService,
              cPhone,
              cMessage,
              jName,
              jExperience,
              jWebsite,
              jPhone,
              jEmailAddress,
              jLocation,
              jCurrentState,
              jHighestQualification,
              jPostAppliedFor,
              jDomainWorkOn,
              jFileUpload,
              jMessage,
              hName,
              hCompanyName,
              hEmailAddress,
              hPhone,
              hMessage
          } = req.body;

          const newContact = new Contacts({
              pName : pName, 
              pCompanyName : pCompanyName, 
              pWebsite : pWebsite, 
              pDesiginition : pDesiginition, 
              pEmailAddress : pEmailAddress,
              pLocation : pLocation,
              pEstimatedBudget : pEstimatedBudget,
              pPhone : pPhone,
              pMessage : pMessage,
              cName : cName,
              cCompanyName : cCompanyName,
              cWebsite : cWebsite,
              cDesiginition : cDesiginition,
              cEmailAddress : cEmailAddress,
              cLocation : cLocation,
              cService : cService,
              cPhone : cPhone,
              cMessage : cMessage,
              jName : jName,
              jExperience : jExperience,
              jWebsite : jWebsite,
              jPhone : jPhone,
              jEmailAddress : jEmailAddress,
              jLocation : jLocation,
              jCurrentState : jCurrentState,
              jHighestQualification : jHighestQualification,
              jPostAppliedFor : jPostAppliedFor,
              jDomainWorkOn : jDomainWorkOn,
              jFileUpload : jFileUpload,
              jMessage : jMessage,
              hName : hName,
              hCompanyName : hCompanyName,
              hEmailAddress : hEmailAddress,
              hPhone : hPhone,
              hMessage : hMessage
          })
          await newContact.save();

          res.status(200).json(res.newContact);

       } 
       
       catch (error) {
           return res.status(500).json({msg:error.message})
       }
  }
}

module.exports = contactCtrl;