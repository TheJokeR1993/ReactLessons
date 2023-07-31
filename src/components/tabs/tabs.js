import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import TabContext from '@mui/lab/TabContext';
import { Tab } from '@mui/material';
import { useState } from 'react';
import SchoolList from '../school-list/school-list';
import TodoList from '../todo-list/todo-list';
import FormPage from '../form/form';

const Tabs =()=>{
    const [value, setValue] = useState('1');
    const handleChange = (event, newValue) => {
        setValue(newValue);
      };
return <>
     <TabContext value={value}>
    <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Item One" value="1" />
            <Tab label="Item Two" value="2" />
            <Tab label="Item Three" value="3" />
            
    </TabList>
      
        <TabPanel value="1"><SchoolList /></TabPanel>
        <TabPanel value="2"><TodoList /></TabPanel>
        <TabPanel value="3"><FormPage /></TabPanel>
        </TabContext>
</>
}
export default Tabs