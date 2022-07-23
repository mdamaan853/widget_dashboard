import {
  COMPANY_ADDRESS,
  COMPANY_EMAIL,
  COMPANY_NAME,
  NEW_COMPANY_WINDOW,
} from "../constants"

export const companiesStaticInfo = {
  listViewPage: {
    breadcrumb: [
      { title: "Lexa", link: "#" },
      { title: "Companies", link: "#" },
    ],
  },
  AddCompaines: {
    getInitailStateAndActionFrom: props => {
      const {
        currentRecordId,
        setCompanyUpdate,
        setCompanyCreate,
        record,
        setShowHideCompanyWindow,
        showCreateUpdateWindow,
      } = props
      return (
        (currentRecordId === NEW_COMPANY_WINDOW && [
          { [COMPANY_NAME]: "", [COMPANY_ADDRESS]: "", [COMPANY_EMAIL]: "" },
          setCompanyCreate,
          () => setShowHideCompanyWindow(false),
          showCreateUpdateWindow,
          "Add",

          () => setShowHideCompanyWindow(true),
          false,
          'Add Company'
        ]) || [
          record,
          payload => setCompanyUpdate(...payload, currentRecordId),
          () => setShowHideCompanyWindow(false),
          showCreateUpdateWindow,
          "Edit",
          () => setShowHideCompanyWindow(true),
          true,
          'Update Company'
        ]
      )
    },
    breadcrumb: [
      { title: "Lexa", link: "#" },
      { title: "Dashboard", link: "/dashboard" },
      { title: "Companies", link: "/companies" },
    ],
  },
}
