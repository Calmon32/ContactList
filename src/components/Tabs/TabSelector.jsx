import './TabSelector.scss';

function TabSelector({ tabs, selectedTab, selectTab }) {
  return (
    <div className="tabsContainer">
      {Object.keys(tabs).map(key => {
        return (
          <div key={key}
            onClick={() => !tabs[key].length || selectTab(key)} 
            className={`tab ${selectedTab === key ? 'selected' : !tabs[key].length ? 'empty' : ''}`}
          >
            <span className={`tabCharacter`}>{key}</span>
          </div>
        )
      })}
    </div>
  )
}

export default TabSelector;