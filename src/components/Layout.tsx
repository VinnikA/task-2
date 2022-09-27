import { useAppSelector } from "../hooks";
import AddForms from "./Forms/AddForms";
import EditForm from "./Forms/EditForm";

import Table from "./Table/Table";

const Layout = () => {

  const showEditForm = useAppSelector(state => state.notes.editForm);
  const showAddForm = useAppSelector(state => state.notes.addForm);

  return (
    <div className="container">
      {showAddForm && <AddForms />}
      {showEditForm && <EditForm /> }
      <Table position="top"/>
      <Table position="bottom"/>
    </div>
  )
}

export default Layout;