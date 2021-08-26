# Sweco React Components
This repository contains the Sweco React Components for use within Betty Blocks.
It is based on the [Betty Blocks Material UI Component Set](https://github.com/bettyblocks/material-ui-component-set) which was extended to conform to the Sweco layout and feel.
Some components also contain more functions to allow more granular control of the components (such as absolute margins).

The component set is accesible from [Azure](https://swecobelgium.blob.core.windows.net/reactcomponents)


# Prefab icons
AccordionIcon, AccordionItemIcon, AlertIcon, AutoCompleteIcon, AvatarIcon, BreadcrumbIcon, BreadcrumbItemIcon, ButtonGroupIcon, ButtonIcon, CardIcon, CardActionsIcon, CardContentIcon, CardHeaderIcon, CardMediaIcon, CheckboxIcon, CheckboxGroupIcon, ChipIcon, Column2Icon, Column3Icon, ColumnIcon, ConditionalIcon, ContainerIcon, DataContainer, DataList, DataTable, DataTableBody, DataTableColumn, DataTableHead, DataTableRow, DatePickerIcon, DateTimePickerIcon, DecimalInputIcon, DefinitionListIcon, DialogIcon, DrawerIcon, DynamicFormIcon, DynamicTableIcon, DynamicTilesIcon, EmailInputIcon, FileInputIcon, FormIcon, GridIcon, HiddenInputIcon, HorizontalRuleIcon, HtmlIcon, IbanInputIcon, IconIcon, ImageIcon, ImageInputIcon, IncludeIcon, LabelIcon, Layout1Icon, Layout2Icon, Layout363Icon, Layout444Icon, Layout48Icon, Layout66Icon, Layout3333Icon, Layout84Icon, ListItemIcon, MultiLineIcon, MultiSelectIcon, NavbarIcon, NavItemIcon, NavSidebarIcon, NumberInputIcon, OrderedListIcon, PanelIcon, PaperIcon, ParagraphIcon, PasswordInputIcon, PhoneInputIcon, PriceInputIcon, ProgressBarIcon, RadioButtonIcon, RowIcon, RowColumnIcon, SelectIcon, SidebarLeftIcon, SnackbarIcon, StepIcon, StepperIcon, SubmitButtonIcon, TabIcon, TabsIcon, Table, TextareaIcon, TextInputIcon, TimePickerIcon, TitleIcon, UnorderedListIcon, UrlInputIcon

# Input states
Some inputs use the 'disabled' and 'readonly' classes. In JSX, you cannot simply say 
`const { enabledType } = options
<select {enabledType}></select>
`
This will give a compiler error. To circumvent this, we convert it to an attribute with the same value:
`const selectTypeAttribute = { [enabledType]: enabledType};`
Then use the spread (...) operator to make it act like an attribute
`<select {...selectTypeAttribute}></select>`


# Known errors
* Minified error 130:
    * Check the styles attribute looks like the following:
        `styles: () => ({})`
* Unexpected token 'const'
    * Check if your .js file has no imported modules at the top. Visual Studio Code tends to do that when you autocomplete.
* Error: Network error: Unexpected token S in JSON at position 0
    * This is related to the font awesome icons defined in prefabs. Have yet to find a solution



# Scripts

## Get all icons in a prefab

This method was not good: Betty Blocks does not like many icons for a prefab. My guess is around 1000 icons.

// Go to https://fontawesome.com/icons?d=listing&m=free, and click on "load more icons" untill they are all loaded
// javascript:
              
dictionary = {};
list = document.getElementsByClassName("list ma0 pa0 flex flex-row flex-wrap justify-start items-start")[0]
list.children.forEach(child => dictionary[child.children[0].children[0].children[0].className] = dictionary[child.children[0].children[0].children[0].className]);
var output = ""
Object.keys(dictionary).forEach(k => 
output += "{ name: '" + dictionary[k] + "', value: '" + k + "'},\n")
console.log(output)

Use a regex to remove duplicates:
FIND:   ^(.*)(\r?\n\1)+$
REPLACE $1      


## Remove generated actions (not working)

    var http = new XMLHttpRequest();
var url = "https://meta-api-nl3.betty.services/graphql";
http.open("POST", url, true);
http.setRequestHeader('Authorization', 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkNGQ3ZGQ5ZTJlZjJmYmRjZDcwMmE0OWIzZjE1NTdmODVjZGZlOTZiIiwiZXhwIjoxNjA2MzEyMTU5fQ.UcbtmNahyjGh4TCzSRVgcrueNYhyRyepsdXlOa9Nhvw');


var table = document.querySelector("#root > div > div.sc-oTBUA.hXGkGv > div > main > div > div.sc-oTNDV.jzKNzB > div.StyledBox-sc-13pk1d4-0.dIPsZc.sc-pRtAn.lfmJxf > table > tbody");
table.children.forEach(child => {
    var aElement = child.children[0].children[0].children[0].children[1].children[0];
    if(aElement.innerHTML.includes("main poc")){
        id = aElement.href.split("/").pop()
        const object = {
            operationName: "DeleteAction",
            query: "mutation DeleteAction($input: DeleteActionInput) {\n  deleteAction(input: $input)\n}\n",
            variables: {
                input: {id: id}}
            }
        http.send(JSON.stringify(object));
    }    

})
