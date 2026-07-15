import { StructureResolver } from 'sanity/structure';
import { 
  FaHouse, FaCircleInfo, FaGraduationCap, FaFlask, 
  FaUsers, FaAddressBook, FaBookOpen, FaBuildingColumns, 
  FaUserTie, FaCompass, FaCheckDouble, FaChartLine, 
  FaScrewdriverWrench // Added for Settings
} from 'react-icons/fa6';

export const structure: StructureResolver = (S) =>
  S.defaults()
    .title('Faculty Portal Desk')
    .items([
      
      // 1. SITE CONTENT (Singletons & Pages)
      S.listItem()
        .title('Site Content')
        .icon(FaHouse)
        .child(
          S.list()
            .title('Site Pages')
            .items([
              S.listItem().title("Dean's Message").icon(FaUserTie).child(S.document().schemaType('deanMessagePage').documentId('deanMessagePage')),
              S.listItem().title('Vision & Mission').icon(FaCompass).child(S.document().schemaType('visionMissionPage').documentId('visionMissionPage')),
              S.listItem().title('Why Choose Us').icon(FaCheckDouble).child(S.document().schemaType('whyChooseUs').documentId('whyChooseUs')),
              S.listItem().title('Statistics Section').icon(FaChartLine).child(S.document().schemaType('statsSection').documentId('statsSection')),
              S.divider(),
              S.listItem().title('Facilities Page').icon(FaBuildingColumns).child(S.document().schemaType('facilitiesPage').documentId('facilitiesPage')),
              S.listItem().title('Faculty History').icon(FaBookOpen).child(S.document().schemaType('historyPage').documentId('historyPage')),
              S.listItem().title('Research').icon(FaFlask).child(S.document().schemaType('researchPage').documentId('researchPage')),
              S.listItem().title('Contact Page').icon(FaAddressBook).child(S.document().schemaType('contactPage').documentId('contactPage')),
            ])
        ),

      S.divider(),

      // 2. ACADEMICS & FACULTY (Logical Nesting)
      S.listItem()
        .title('Academic Management')
        .icon(FaGraduationCap)
        .child(
          S.list()
            .title('Curriculum & Faculty')
            .items([
              S.documentTypeListItem('department').title('Academic Departments'),
              S.documentTypeListItem('staffPage').title('Faculty Staff Directory'),
            ])
        ),

      S.divider(),

      // 3. FALLBACK (Everything else)
      ...S.documentTypeListItems().filter(
        (listItem) =>
          ![
            'deanMessagePage', 'visionMissionPage', 'whyChooseUs', 'statsSection',
            'facilitiesPage', 'historyPage', 'department', 'researchPage',
            'staffPage', 'contactPage'
          ].includes(listItem.getId() || '')
      ),
    ]);