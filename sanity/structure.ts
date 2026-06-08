import { StructureResolver } from 'sanity/structure'
import { 
  FaHouse, 
  FaCircleInfo, 
  FaGraduationCap, 
  FaFlask, 
  FaUsers, 
  FaAddressBook,
  FaBookOpen,
  FaBuildingColumns,
  FaUserTie,
  FaCompass,
  FaLaptopCode 
} from 'react-icons/fa6'

export const structure: StructureResolver = (S) =>
  S.defaults()
    .title('Faculty Portal Desk')
    .items([
      
      // 1. HOME DROPDOWN GROUP
      S.listItem()
        .title('Home')
        .icon(FaHouse)
        .child(
          S.list()
            .title('Home')
            .items([
              S.listItem()
                .title("Dean's Message")
                .icon(FaUserTie)
                .child(
                  S.document()
                    .schemaType('deanMessagePage')
                    .documentId('deanMessagePage')
                ),
              S.listItem()
                .title('Vision & Mission')
                .icon(FaCompass)
                .child(
                  S.document()
                    .schemaType('visionMissionPage')
                    .documentId('visionMissionPage')
                ),
            ])
        ),

      // 2. ABOUT DROPDOWN GROUP
      S.listItem()
        .title('About')
        .icon(FaCircleInfo)
        .child(
          S.list()
            .title('About Sub-pages')
            .items([
              S.listItem()
                .title('Facilities')
                .icon(FaBuildingColumns)
                .child(
                  S.document()
                    .schemaType('facilitiesPage')
                    .documentId('facilitiesPage')
                ),
              S.listItem()
                .title('Faculty History')
                .icon(FaBookOpen)
                .child(
                  S.document()
                    .schemaType('historyPage')
                    .documentId('historyPage')
                ),
            ])
        ),

      // 3. DYNAMIC ACADEMIC DROPDOWN GROUP
      S.listItem()
        .title('Academic')
        .icon(FaGraduationCap)
        .child(
          S.list()
            .title('Academic Desk')
            .items([
              S.listItem()
                .title('Manage Departments')
                .icon(FaLaptopCode)
                // Removed the broken .description() call to clear ts(2339)
                .child(
                  S.documentTypeList('department')
                    .title('Faculty Departments')
                ),
            ])
        ),

      // 4. MAIN LINK PAGES (SINGLETONS)
      S.listItem()
        .title('Research Page')
        .icon(FaFlask)
        .child(
          S.document()
            .schemaType('researchPage')
            .documentId('researchPage')
        ),

      S.listItem()
        .title('Staff Directory Page')
        .icon(FaUsers)
        .child(
          S.document()
            .schemaType('staffPage')
            .documentId('staffPage')
        ),

      S.listItem()
        .title('Contact Page')
        .icon(FaAddressBook)
        .child(
          S.document()
            .schemaType('contactPage')
            .documentId('contactPage')
        ),

      S.divider(),

      // Filter out handled singletons and collections from the bottom fallback list
      ...S.documentTypeListItems().filter(
        (listItem) =>
          ![
            'deanMessagePage',
            'visionMissionPage',
            'facilitiesPage',
            'historyPage',
            'department', 
            'researchPage',
            'staffPage',
            'contactPage'
          ].includes(listItem.getId() || '')
      ),
    ])