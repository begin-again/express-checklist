const checklistInstances = {
  DATA: {
    INSTANCES: [
      { INSTANCE_TITLE: 'Fake Checklist', TERM_EFFECTIVE: 201980, CHECKLIST_ID: 'ASCF', CHECKLIST_INSTANCE_ID: 1 },
      { INSTANCE_TITLE: 'Another Checklist', TERM_EFFECTIVE: 2012030, CHECKLIST_ID: 'ASCF', CHECKLIST_INSTANCE_ID: 2 }
    ]
  }
};

const getInstanceItems = {
  DATA: {
    ITEMS: [
      {
        INSTANCE_TITLE: 'Fake Checklist',
        CHECKLIST_INSTANCE_ID: 1,
        CHECKLIST_ACTIVE: 1,
        CHECKLIST_ITEM_ID: 1,
        IS_ACTIVE: 1,
        ITEM_TITLE: 'Do Stuff 1',
        ITEM_ID: 1,
        ITEM_ORDER: 1,
        DEADLINE: '',
        OPEN_DATE: '',
        SECTION_ID: 1,
        SECTION_NAME: 'Section A',
        SECTION_ORDER: 1
      },
      {
        INSTANCE_TITLE: 'Fake CHecklist',
        CHECKLIST_INSTANCE_ID: 1,
        CHECKLIST_ACTIVE: 1,
        CHECKLIST_ITEM_ID: 1,
        IS_ACTIVE: 1,
        ITEM_TITLE: 'Do More Stuff',
        ITEM_ID: 2,
        ITEM_ORDER: 2,
        DEADLINE: '',
        OPEN_DATE: '',
        SECTION_ID: 1,
        SECTION_NAME: 'Section A',
        SECTION_ORDER: 1
      }
    ]
  }
};

const saveChecklistInstanceTitle = { DATA: 1 };

const getItemsThatYouCanAdd = {
     DATA: {
        ITEMS: [{
            INSTANCE_TITLE: 'Fake Checklist',
            CHECKLIST_INSTANCE_ID: 1,
            CHECKLIST_ACTIVE: 1,
            CHECKLIST_ITEM_ID: 1,
            IS_ACTIVE: 1,
            ITEM_TITLE: 'Get Funky',
            ITEM_ID: 4,
            ITEM_ORDER: 1,
            DEADLINE: '',
            OPEN_DATE: '',
            SECTION_ID: 1,
            SECTION_NAME: 'Section A',
            SECTION_ORDER: 1
        },
        {
            INSTANCE_TITLE: 'Fake CHecklist',
            CHECKLIST_INSTANCE_ID: 1,
            CHECKLIST_ACTIVE: 1,
            CHECKLIST_ITEM_ID: 1,
            IS_ACTIVE: 1,
            ITEM_TITLE: 'Eat a bisquit',
            ITEM_ID: 8,
            ITEM_ORDER: 2,
            DEADLINE: '',
            OPEN_DATE: '',
            SECTION_ID: 1,
            SECTION_NAME: 'Section A',
            SECTION_ORDER: 1
        }]
    }
};

const saveInstance = {
    DATA: 1
}

const updateChecklistActiveStatus = {
    DATA: 1
}

module.exports = {
  checklistInstances,
  getInstanceItems,
  saveChecklistInstanceTitle,
  getItemsThatYouCanAdd,
  saveInstance,
  updateChecklistActiveStatus
};
