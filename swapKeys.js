const keyMap = [
    {server: 'INSTANCE_TITLE', local: 'checklistInstanceTitle'},
    {server: 'ITEM_ID', local: 'itemId'},
    {server: 'CHECKLIST_ITEM_ID', local: 'checklistItemId'},
    {server: 'CHECKLIST_INSTANCE_ID', local: 'checklistInstanceId'},
    {server: 'IS_ACTIVE', local: 'isActive'},
    {server: 'ITEM_ORDER', local: 'itemOrder'},
    {server: 'DEADLINE', local: 'deadline'},
    {server: 'ITEM_TITLE', local: 'itemTitle'},
    {server: 'OPEN_DATE', local: 'openDate'},
    {server: 'SECTION_ID', local: 'sectionId'},
    {server: 'SECTION_NAME', local: 'sectionName'},
    {server: 'SECTION_ORDER', local: 'sectionOrder'},
]

const findKeyPair = (key) => {
    return keyMap.find( pair => pair.server === key || pair.local === key)
}

const swapKeys = (item, action = 'server') => {
    const newItem = {};
    Object.keys(item).map( oKey => {
        const pair = findKeyPair(oKey);
        if(pair) {
            if(action === 'server') {
                newItem[pair.server] = item[pair.local]
            }
            else {
                newItem[pair.local] = item[pair.server]
            }
        }
    })
    return newItem;
}

const toLocal = (item) => swapKeys(item, 'local')
const toServer = (item) => swapKeys(item, 'server')

module.exports = {
    toLocal,
    toServer
}
