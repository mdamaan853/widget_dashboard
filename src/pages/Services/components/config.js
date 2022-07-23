import { slugs } from "../../../constants"
import {
  SERVICE_ADDRESS,
  SERVICE_EMAIL,
  SERVICE_NAME,
  NEW_SERVICE_WINDOW,
} from "../constants"

export const servicesStaticInfo = {
  listViewPage: {
    breadcrumb: [
      { title: "Lexa", link: "#" },
      { title: "Companies", link: "/" },
    ],
    getBreadCrumb: (name, id) => {
      return [
        { title: "Lexa", link: "#" },
        { title: "Companies", link: slugs.companies },
        {
          title: `${name} Services`,
          link: "#"
        //   link: `${slugs.companies}/${id}/services`,
        },
      ]
    },
  },
  AddCompaines: {
    getInitailStateAndActionFrom: props => {
      const {
        currentRecordId,
        setServiceUpdate,
        setServiceCreate,
        record,
        setShowHideServiceWindow,
        showCreateUpdateWindow,
      } = props
      return (
        (currentRecordId === NEW_SERVICE_WINDOW && [
          // { [COMPANY_NAME]: "", [COMPANY_ADDRESS]: "", [COMPANY_EMAIL]: "" },
          setServiceCreate,
          () => setShowHideServiceWindow(false),
          showCreateUpdateWindow,
          "Add",

          () => setShowHideServiceWindow(true),
          false,
          "Add Service",
        ]) || [
          record,
          payload => setServiceUpdate(...payload, currentRecordId),
          () => setShowHideServiceWindow(false),
          showCreateUpdateWindow,
          "Edit",
          () => setShowHideServiceWindow(true),
          true,
          "Update Service",
        ]
      )
    },
    breadcrumb: [
      { title: "Lexa", link: "#" },
      { title: "Dashboard", link: "/dashboard" },
      { title: "Companies", link: "/services" },
    ],
  },
}
