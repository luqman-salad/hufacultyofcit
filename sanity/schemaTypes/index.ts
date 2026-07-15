import { type SchemaTypeDefinition } from 'sanity'
import facilitiesPage from './facilities' // Make sure the path accurately maps your folder structure
import deanMessagePage from './deanMessagePage'
import visionMissionPage from './visionMissionPage'
import historyPage from './historyPage'
import department from './department' 
import researchPage from './research'
import staffPage from './staffPage'
import contactPage from './contactPage'
import whyChooseUs from './whyChooseUs'
import news from './news'
import facultyAdmins from './facultyAdmins'
import stats from './stats'
import course from './course'
import lab from './lab'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    facilitiesPage,
    deanMessagePage,
    visionMissionPage,
    historyPage,
    department, 
    researchPage,
    staffPage,
    contactPage,
    whyChooseUs,
    news,
    facultyAdmins,
    stats,
    course,
    lab,
  ],
}