{
	"_Name": "RioMDKPOC",
	"Version": "/RioMDKPOC/Globals/Application/AppDefinition_Version.global",
	"MainPage": "/RioMDKPOC/Pages/Main.page",
	"OnLaunch": ["$(PLT,/RioMDKPOC/Rules/Service/Initialize.js,/RioMDKPOC/Rules/Service/Initialize.js,/RioMDKPOC/Actions/RioFormsMDK/Service/InitializeOnlineWeb.action)"],
	"OnWillUpdate": "/RioMDKPOC/Rules/Application/OnWillUpdate.js",
	"OnDidUpdate": "/RioMDKPOC/Rules/Service/Initialize.js",
	"Styles": "/RioMDKPOC/Styles/Styles.less",
	"Localization": "/RioMDKPOC/i18n/i18n.properties",
	"_SchemaVersion": "25.9"
}