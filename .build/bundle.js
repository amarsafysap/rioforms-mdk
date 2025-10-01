(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@nativescript/core/connectivity"), require("@nativescript/core/application-settings"));
	else if(typeof define === 'function' && define.amd)
		define(["@nativescript/core/connectivity", "@nativescript/core/application-settings"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("@nativescript/core/connectivity"), require("@nativescript/core/application-settings")) : factory(root["@nativescript/core/connectivity"], root["@nativescript/core/application-settings"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, (__WEBPACK_EXTERNAL_MODULE__nativescript_core_connectivity__, __WEBPACK_EXTERNAL_MODULE__nativescript_core_application_settings__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./build.definitions/RioMDKPOC/i18n/i18n.properties":
/*!**********************************************************!*\
  !*** ./build.definitions/RioMDKPOC/i18n/i18n.properties ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = ""

/***/ }),

/***/ "./build.definitions/application-index.js":
/*!************************************************!*\
  !*** ./build.definitions/application-index.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let application_app = __webpack_require__(/*! ./Application.app */ "./build.definitions/Application.app")
let riomdkpoc_actions_application_appupdate_action = __webpack_require__(/*! ./RioMDKPOC/Actions/Application/AppUpdate.action */ "./build.definitions/RioMDKPOC/Actions/Application/AppUpdate.action")
let riomdkpoc_actions_application_appupdatefailuremessage_action = __webpack_require__(/*! ./RioMDKPOC/Actions/Application/AppUpdateFailureMessage.action */ "./build.definitions/RioMDKPOC/Actions/Application/AppUpdateFailureMessage.action")
let riomdkpoc_actions_application_appupdateprogressbanner_action = __webpack_require__(/*! ./RioMDKPOC/Actions/Application/AppUpdateProgressBanner.action */ "./build.definitions/RioMDKPOC/Actions/Application/AppUpdateProgressBanner.action")
let riomdkpoc_actions_application_appupdatesuccessmessage_action = __webpack_require__(/*! ./RioMDKPOC/Actions/Application/AppUpdateSuccessMessage.action */ "./build.definitions/RioMDKPOC/Actions/Application/AppUpdateSuccessMessage.action")
let riomdkpoc_actions_application_logout_action = __webpack_require__(/*! ./RioMDKPOC/Actions/Application/Logout.action */ "./build.definitions/RioMDKPOC/Actions/Application/Logout.action")
let riomdkpoc_actions_application_navtoabout_action = __webpack_require__(/*! ./RioMDKPOC/Actions/Application/NavToAbout.action */ "./build.definitions/RioMDKPOC/Actions/Application/NavToAbout.action")
let riomdkpoc_actions_application_navtoactivitylog_action = __webpack_require__(/*! ./RioMDKPOC/Actions/Application/NavToActivityLog.action */ "./build.definitions/RioMDKPOC/Actions/Application/NavToActivityLog.action")
let riomdkpoc_actions_application_navtosupport_action = __webpack_require__(/*! ./RioMDKPOC/Actions/Application/NavToSupport.action */ "./build.definitions/RioMDKPOC/Actions/Application/NavToSupport.action")
let riomdkpoc_actions_application_onwillupdate_action = __webpack_require__(/*! ./RioMDKPOC/Actions/Application/OnWillUpdate.action */ "./build.definitions/RioMDKPOC/Actions/Application/OnWillUpdate.action")
let riomdkpoc_actions_application_reset_action = __webpack_require__(/*! ./RioMDKPOC/Actions/Application/Reset.action */ "./build.definitions/RioMDKPOC/Actions/Application/Reset.action")
let riomdkpoc_actions_application_resetmessage_action = __webpack_require__(/*! ./RioMDKPOC/Actions/Application/ResetMessage.action */ "./build.definitions/RioMDKPOC/Actions/Application/ResetMessage.action")
let riomdkpoc_actions_application_usermenupopover_action = __webpack_require__(/*! ./RioMDKPOC/Actions/Application/UserMenuPopover.action */ "./build.definitions/RioMDKPOC/Actions/Application/UserMenuPopover.action")
let riomdkpoc_actions_closemodalpage_cancel_action = __webpack_require__(/*! ./RioMDKPOC/Actions/CloseModalPage_Cancel.action */ "./build.definitions/RioMDKPOC/Actions/CloseModalPage_Cancel.action")
let riomdkpoc_actions_closemodalpage_complete_action = __webpack_require__(/*! ./RioMDKPOC/Actions/CloseModalPage_Complete.action */ "./build.definitions/RioMDKPOC/Actions/CloseModalPage_Complete.action")
let riomdkpoc_actions_closepage_action = __webpack_require__(/*! ./RioMDKPOC/Actions/ClosePage.action */ "./build.definitions/RioMDKPOC/Actions/ClosePage.action")
let riomdkpoc_actions_errorarchive_errorarchive_syncfailure_action = __webpack_require__(/*! ./RioMDKPOC/Actions/ErrorArchive/ErrorArchive_SyncFailure.action */ "./build.definitions/RioMDKPOC/Actions/ErrorArchive/ErrorArchive_SyncFailure.action")
let riomdkpoc_actions_errorarchive_navtoerrorarchive_detail_action = __webpack_require__(/*! ./RioMDKPOC/Actions/ErrorArchive/NavToErrorArchive_Detail.action */ "./build.definitions/RioMDKPOC/Actions/ErrorArchive/NavToErrorArchive_Detail.action")
let riomdkpoc_actions_errorarchive_navtoerrorarchive_list_action = __webpack_require__(/*! ./RioMDKPOC/Actions/ErrorArchive/NavToErrorArchive_List.action */ "./build.definitions/RioMDKPOC/Actions/ErrorArchive/NavToErrorArchive_List.action")
let riomdkpoc_actions_genericbannermessage_action = __webpack_require__(/*! ./RioMDKPOC/Actions/GenericBannerMessage.action */ "./build.definitions/RioMDKPOC/Actions/GenericBannerMessage.action")
let riomdkpoc_actions_genericmessagebox_action = __webpack_require__(/*! ./RioMDKPOC/Actions/GenericMessageBox.action */ "./build.definitions/RioMDKPOC/Actions/GenericMessageBox.action")
let riomdkpoc_actions_genericnavigation_action = __webpack_require__(/*! ./RioMDKPOC/Actions/GenericNavigation.action */ "./build.definitions/RioMDKPOC/Actions/GenericNavigation.action")
let riomdkpoc_actions_generictoastmessage_action = __webpack_require__(/*! ./RioMDKPOC/Actions/GenericToastMessage.action */ "./build.definitions/RioMDKPOC/Actions/GenericToastMessage.action")
let riomdkpoc_actions_logging_loguploadfailure_action = __webpack_require__(/*! ./RioMDKPOC/Actions/Logging/LogUploadFailure.action */ "./build.definitions/RioMDKPOC/Actions/Logging/LogUploadFailure.action")
let riomdkpoc_actions_logging_loguploadsuccessful_action = __webpack_require__(/*! ./RioMDKPOC/Actions/Logging/LogUploadSuccessful.action */ "./build.definitions/RioMDKPOC/Actions/Logging/LogUploadSuccessful.action")
let riomdkpoc_actions_logging_uploadlog_action = __webpack_require__(/*! ./RioMDKPOC/Actions/Logging/UploadLog.action */ "./build.definitions/RioMDKPOC/Actions/Logging/UploadLog.action")
let riomdkpoc_actions_logging_uploadlogprogress_action = __webpack_require__(/*! ./RioMDKPOC/Actions/Logging/UploadLogProgress.action */ "./build.definitions/RioMDKPOC/Actions/Logging/UploadLogProgress.action")
let riomdkpoc_actions_navigation_closepage_action = __webpack_require__(/*! ./RioMDKPOC/Actions/Navigation/ClosePage.action */ "./build.definitions/RioMDKPOC/Actions/Navigation/ClosePage.action")
let riomdkpoc_actions_navtoformdetail_action = __webpack_require__(/*! ./RioMDKPOC/Actions/NavToFormDetail.action */ "./build.definitions/RioMDKPOC/Actions/NavToFormDetail.action")
let riomdkpoc_actions_odata_createanswer_fromcd_action = __webpack_require__(/*! ./RioMDKPOC/Actions/ODATA/CreateAnswer_FromCD.action */ "./build.definitions/RioMDKPOC/Actions/ODATA/CreateAnswer_FromCD.action")
let riomdkpoc_actions_odata_createformrecord_minimal_action = __webpack_require__(/*! ./RioMDKPOC/Actions/ODATA/CreateFormRecord_Minimal.action */ "./build.definitions/RioMDKPOC/Actions/ODATA/CreateFormRecord_Minimal.action")
let riomdkpoc_actions_rioformsmdk_service_closeoffline_action = __webpack_require__(/*! ./RioMDKPOC/Actions/RioFormsMDK/Service/CloseOffline.action */ "./build.definitions/RioMDKPOC/Actions/RioFormsMDK/Service/CloseOffline.action")
let riomdkpoc_actions_rioformsmdk_service_closeofflinefailuremessage_action = __webpack_require__(/*! ./RioMDKPOC/Actions/RioFormsMDK/Service/CloseOfflineFailureMessage.action */ "./build.definitions/RioMDKPOC/Actions/RioFormsMDK/Service/CloseOfflineFailureMessage.action")
let riomdkpoc_actions_rioformsmdk_service_closeofflinesuccessmessage_action = __webpack_require__(/*! ./RioMDKPOC/Actions/RioFormsMDK/Service/CloseOfflineSuccessMessage.action */ "./build.definitions/RioMDKPOC/Actions/RioFormsMDK/Service/CloseOfflineSuccessMessage.action")
let riomdkpoc_actions_rioformsmdk_service_downloadafterupload_action = __webpack_require__(/*! ./RioMDKPOC/Actions/RioFormsMDK/Service/DownloadAfterUpload.action */ "./build.definitions/RioMDKPOC/Actions/RioFormsMDK/Service/DownloadAfterUpload.action")
let riomdkpoc_actions_rioformsmdk_service_downloadoffline_action = __webpack_require__(/*! ./RioMDKPOC/Actions/RioFormsMDK/Service/DownloadOffline.action */ "./build.definitions/RioMDKPOC/Actions/RioFormsMDK/Service/DownloadOffline.action")
let riomdkpoc_actions_rioformsmdk_service_downloadoffline_silent_action = __webpack_require__(/*! ./RioMDKPOC/Actions/RioFormsMDK/Service/DownloadOffline_Silent.action */ "./build.definitions/RioMDKPOC/Actions/RioFormsMDK/Service/DownloadOffline_Silent.action")
let riomdkpoc_actions_rioformsmdk_service_downloadstartedmessage_action = __webpack_require__(/*! ./RioMDKPOC/Actions/RioFormsMDK/Service/DownloadStartedMessage.action */ "./build.definitions/RioMDKPOC/Actions/RioFormsMDK/Service/DownloadStartedMessage.action")
let riomdkpoc_actions_rioformsmdk_service_initializeoffline_action = __webpack_require__(/*! ./RioMDKPOC/Actions/RioFormsMDK/Service/InitializeOffline.action */ "./build.definitions/RioMDKPOC/Actions/RioFormsMDK/Service/InitializeOffline.action")
let riomdkpoc_actions_rioformsmdk_service_initializeofflinefailuremessage_action = __webpack_require__(/*! ./RioMDKPOC/Actions/RioFormsMDK/Service/InitializeOfflineFailureMessage.action */ "./build.definitions/RioMDKPOC/Actions/RioFormsMDK/Service/InitializeOfflineFailureMessage.action")
let riomdkpoc_actions_rioformsmdk_service_initializeonlineweb_action = __webpack_require__(/*! ./RioMDKPOC/Actions/RioFormsMDK/Service/InitializeOnlineWeb.action */ "./build.definitions/RioMDKPOC/Actions/RioFormsMDK/Service/InitializeOnlineWeb.action")
let riomdkpoc_actions_rioformsmdk_service_syncfailuremessage_action = __webpack_require__(/*! ./RioMDKPOC/Actions/RioFormsMDK/Service/SyncFailureMessage.action */ "./build.definitions/RioMDKPOC/Actions/RioFormsMDK/Service/SyncFailureMessage.action")
let riomdkpoc_actions_rioformsmdk_service_syncstartedmessage_action = __webpack_require__(/*! ./RioMDKPOC/Actions/RioFormsMDK/Service/SyncStartedMessage.action */ "./build.definitions/RioMDKPOC/Actions/RioFormsMDK/Service/SyncStartedMessage.action")
let riomdkpoc_actions_rioformsmdk_service_uploadoffline_action = __webpack_require__(/*! ./RioMDKPOC/Actions/RioFormsMDK/Service/UploadOffline.action */ "./build.definitions/RioMDKPOC/Actions/RioFormsMDK/Service/UploadOffline.action")
let riomdkpoc_actions_rioformsmdk_service_uploadoffline_silent_action = __webpack_require__(/*! ./RioMDKPOC/Actions/RioFormsMDK/Service/UploadOffline_Silent.action */ "./build.definitions/RioMDKPOC/Actions/RioFormsMDK/Service/UploadOffline_Silent.action")
let riomdkpoc_actions_submit_autosync_aftercs_action = __webpack_require__(/*! ./RioMDKPOC/Actions/Submit/AutoSync_AfterCS.action */ "./build.definitions/RioMDKPOC/Actions/Submit/AutoSync_AfterCS.action")
let riomdkpoc_actions_submit_submitparentandchildren_cs_action = __webpack_require__(/*! ./RioMDKPOC/Actions/Submit/SubmitParentAndChildren_CS.action */ "./build.definitions/RioMDKPOC/Actions/Submit/SubmitParentAndChildren_CS.action")
let riomdkpoc_actions_util_alert_changesetfail_action = __webpack_require__(/*! ./RioMDKPOC/Actions/Util/Alert_ChangeSetFail.action */ "./build.definitions/RioMDKPOC/Actions/Util/Alert_ChangeSetFail.action")
let riomdkpoc_actions_util_alert_changesetok_action = __webpack_require__(/*! ./RioMDKPOC/Actions/Util/Alert_ChangeSetOK.action */ "./build.definitions/RioMDKPOC/Actions/Util/Alert_ChangeSetOK.action")
let riomdkpoc_actions_util_alert_offlinequeued_action = __webpack_require__(/*! ./RioMDKPOC/Actions/Util/Alert_OfflineQueued.action */ "./build.definitions/RioMDKPOC/Actions/Util/Alert_OfflineQueued.action")
let riomdkpoc_actions_util_alert_submitsyncedok_action = __webpack_require__(/*! ./RioMDKPOC/Actions/Util/Alert_SubmitSyncedOK.action */ "./build.definitions/RioMDKPOC/Actions/Util/Alert_SubmitSyncedOK.action")
let riomdkpoc_actions_util_alertmessage_action = __webpack_require__(/*! ./RioMDKPOC/Actions/Util/AlertMessage.action */ "./build.definitions/RioMDKPOC/Actions/Util/AlertMessage.action")
let riomdkpoc_actions_util_toast_changesetfail_action = __webpack_require__(/*! ./RioMDKPOC/Actions/Util/Toast_ChangeSetFail.action */ "./build.definitions/RioMDKPOC/Actions/Util/Toast_ChangeSetFail.action")
let riomdkpoc_actions_util_toast_changesetok_action = __webpack_require__(/*! ./RioMDKPOC/Actions/Util/Toast_ChangeSetOK.action */ "./build.definitions/RioMDKPOC/Actions/Util/Toast_ChangeSetOK.action")
let riomdkpoc_actions_util_toastmessage_action = __webpack_require__(/*! ./RioMDKPOC/Actions/Util/ToastMessage.action */ "./build.definitions/RioMDKPOC/Actions/Util/ToastMessage.action")
let riomdkpoc_fragments_questionsection_fragment = __webpack_require__(/*! ./RioMDKPOC/Fragments/QuestionSection.fragment */ "./build.definitions/RioMDKPOC/Fragments/QuestionSection.fragment")
let riomdkpoc_globals_application_appdefinition_version_global = __webpack_require__(/*! ./RioMDKPOC/Globals/Application/AppDefinition_Version.global */ "./build.definitions/RioMDKPOC/Globals/Application/AppDefinition_Version.global")
let riomdkpoc_globals_application_applicationname_global = __webpack_require__(/*! ./RioMDKPOC/Globals/Application/ApplicationName.global */ "./build.definitions/RioMDKPOC/Globals/Application/ApplicationName.global")
let riomdkpoc_globals_application_supportemail_global = __webpack_require__(/*! ./RioMDKPOC/Globals/Application/SupportEmail.global */ "./build.definitions/RioMDKPOC/Globals/Application/SupportEmail.global")
let riomdkpoc_globals_application_supportphone_global = __webpack_require__(/*! ./RioMDKPOC/Globals/Application/SupportPhone.global */ "./build.definitions/RioMDKPOC/Globals/Application/SupportPhone.global")
let riomdkpoc_i18n_i18n_properties = __webpack_require__(/*! ./RioMDKPOC/i18n/i18n.properties */ "./build.definitions/RioMDKPOC/i18n/i18n.properties")
let riomdkpoc_jsconfig_json = __webpack_require__(/*! ./RioMDKPOC/jsconfig.json */ "./build.definitions/RioMDKPOC/jsconfig.json")
let riomdkpoc_pages_application_about_page = __webpack_require__(/*! ./RioMDKPOC/Pages/Application/About.page */ "./build.definitions/RioMDKPOC/Pages/Application/About.page")
let riomdkpoc_pages_application_support_page = __webpack_require__(/*! ./RioMDKPOC/Pages/Application/Support.page */ "./build.definitions/RioMDKPOC/Pages/Application/Support.page")
let riomdkpoc_pages_application_useractivitylog_page = __webpack_require__(/*! ./RioMDKPOC/Pages/Application/UserActivityLog.page */ "./build.definitions/RioMDKPOC/Pages/Application/UserActivityLog.page")
let riomdkpoc_pages_errorarchive_errorarchive_detail_page = __webpack_require__(/*! ./RioMDKPOC/Pages/ErrorArchive/ErrorArchive_Detail.page */ "./build.definitions/RioMDKPOC/Pages/ErrorArchive/ErrorArchive_Detail.page")
let riomdkpoc_pages_errorarchive_errorarchive_list_page = __webpack_require__(/*! ./RioMDKPOC/Pages/ErrorArchive/ErrorArchive_List.page */ "./build.definitions/RioMDKPOC/Pages/ErrorArchive/ErrorArchive_List.page")
let riomdkpoc_pages_formdetail_page = __webpack_require__(/*! ./RioMDKPOC/Pages/FormDetail.page */ "./build.definitions/RioMDKPOC/Pages/FormDetail.page")
let riomdkpoc_pages_main_page = __webpack_require__(/*! ./RioMDKPOC/Pages/Main.page */ "./build.definitions/RioMDKPOC/Pages/Main.page")
let riomdkpoc_rules_application_appupdatefailure_js = __webpack_require__(/*! ./RioMDKPOC/Rules/Application/AppUpdateFailure.js */ "./build.definitions/RioMDKPOC/Rules/Application/AppUpdateFailure.js")
let riomdkpoc_rules_application_appupdatesuccess_js = __webpack_require__(/*! ./RioMDKPOC/Rules/Application/AppUpdateSuccess.js */ "./build.definitions/RioMDKPOC/Rules/Application/AppUpdateSuccess.js")
let riomdkpoc_rules_application_clientismultiusermode_js = __webpack_require__(/*! ./RioMDKPOC/Rules/Application/ClientIsMultiUserMode.js */ "./build.definitions/RioMDKPOC/Rules/Application/ClientIsMultiUserMode.js")
let riomdkpoc_rules_application_getclientsupportversions_js = __webpack_require__(/*! ./RioMDKPOC/Rules/Application/GetClientSupportVersions.js */ "./build.definitions/RioMDKPOC/Rules/Application/GetClientSupportVersions.js")
let riomdkpoc_rules_application_getclientversion_js = __webpack_require__(/*! ./RioMDKPOC/Rules/Application/GetClientVersion.js */ "./build.definitions/RioMDKPOC/Rules/Application/GetClientVersion.js")
let riomdkpoc_rules_application_onwillupdate_js = __webpack_require__(/*! ./RioMDKPOC/Rules/Application/OnWillUpdate.js */ "./build.definitions/RioMDKPOC/Rules/Application/OnWillUpdate.js")
let riomdkpoc_rules_application_resetappsettingsandlogout_js = __webpack_require__(/*! ./RioMDKPOC/Rules/Application/ResetAppSettingsAndLogout.js */ "./build.definitions/RioMDKPOC/Rules/Application/ResetAppSettingsAndLogout.js")
let riomdkpoc_rules_buildchildren_incs_js = __webpack_require__(/*! ./RioMDKPOC/Rules/BuildChildren_InCS.js */ "./build.definitions/RioMDKPOC/Rules/BuildChildren_InCS.js")
let riomdkpoc_rules_childprops_getbool_fromcd_js = __webpack_require__(/*! ./RioMDKPOC/Rules/ChildProps/GetBool_FromCD.js */ "./build.definitions/RioMDKPOC/Rules/ChildProps/GetBool_FromCD.js")
let riomdkpoc_rules_childprops_getquestionid_fromcd_js = __webpack_require__(/*! ./RioMDKPOC/Rules/ChildProps/GetQuestionID_FromCD.js */ "./build.definitions/RioMDKPOC/Rules/ChildProps/GetQuestionID_FromCD.js")
let riomdkpoc_rules_childprops_gettext_fromcd_js = __webpack_require__(/*! ./RioMDKPOC/Rules/ChildProps/GetText_FromCD.js */ "./build.definitions/RioMDKPOC/Rules/ChildProps/GetText_FromCD.js")
let riomdkpoc_rules_logging_loglevels_js = __webpack_require__(/*! ./RioMDKPOC/Rules/Logging/LogLevels.js */ "./build.definitions/RioMDKPOC/Rules/Logging/LogLevels.js")
let riomdkpoc_rules_logging_settracecategories_js = __webpack_require__(/*! ./RioMDKPOC/Rules/Logging/SetTraceCategories.js */ "./build.definitions/RioMDKPOC/Rules/Logging/SetTraceCategories.js")
let riomdkpoc_rules_logging_setuserloglevel_js = __webpack_require__(/*! ./RioMDKPOC/Rules/Logging/SetUserLogLevel.js */ "./build.definitions/RioMDKPOC/Rules/Logging/SetUserLogLevel.js")
let riomdkpoc_rules_logging_togglelogging_js = __webpack_require__(/*! ./RioMDKPOC/Rules/Logging/ToggleLogging.js */ "./build.definitions/RioMDKPOC/Rules/Logging/ToggleLogging.js")
let riomdkpoc_rules_logging_tracecategories_js = __webpack_require__(/*! ./RioMDKPOC/Rules/Logging/TraceCategories.js */ "./build.definitions/RioMDKPOC/Rules/Logging/TraceCategories.js")
let riomdkpoc_rules_logging_userlogsetting_js = __webpack_require__(/*! ./RioMDKPOC/Rules/Logging/UserLogSetting.js */ "./build.definitions/RioMDKPOC/Rules/Logging/UserLogSetting.js")
let riomdkpoc_rules_main_main_onloaded_js = __webpack_require__(/*! ./RioMDKPOC/Rules/Main/Main_OnLoaded.js */ "./build.definitions/RioMDKPOC/Rules/Main/Main_OnLoaded.js")
let riomdkpoc_rules_main_main_onreturning_js = __webpack_require__(/*! ./RioMDKPOC/Rules/Main/Main_OnReturning.js */ "./build.definitions/RioMDKPOC/Rules/Main/Main_OnReturning.js")
let riomdkpoc_rules_main_main_onunloaded_js = __webpack_require__(/*! ./RioMDKPOC/Rules/Main/Main_OnUnloaded.js */ "./build.definitions/RioMDKPOC/Rules/Main/Main_OnUnloaded.js")
let riomdkpoc_rules_network_getonlinebadge_js = __webpack_require__(/*! ./RioMDKPOC/Rules/Network/GetOnlineBadge.js */ "./build.definitions/RioMDKPOC/Rules/Network/GetOnlineBadge.js")
let riomdkpoc_rules_onformdetailloaded_js = __webpack_require__(/*! ./RioMDKPOC/Rules/OnFormDetailLoaded.js */ "./build.definitions/RioMDKPOC/Rules/OnFormDetailLoaded.js")
let riomdkpoc_rules_parentprops_getfirstname_frompage_js = __webpack_require__(/*! ./RioMDKPOC/Rules/ParentProps/GetFirstName_FromPage.js */ "./build.definitions/RioMDKPOC/Rules/ParentProps/GetFirstName_FromPage.js")
let riomdkpoc_rules_parentprops_getlastname_frompage_js = __webpack_require__(/*! ./RioMDKPOC/Rules/ParentProps/GetLastName_FromPage.js */ "./build.definitions/RioMDKPOC/Rules/ParentProps/GetLastName_FromPage.js")
let riomdkpoc_rules_rioformsmdk_errorarchive_checkforsyncerror_js = __webpack_require__(/*! ./RioMDKPOC/Rules/RioFormsMDK/ErrorArchive_CheckForSyncError.js */ "./build.definitions/RioMDKPOC/Rules/RioFormsMDK/ErrorArchive_CheckForSyncError.js")
let riomdkpoc_rules_service_initialize_js = __webpack_require__(/*! ./RioMDKPOC/Rules/Service/Initialize.js */ "./build.definitions/RioMDKPOC/Rules/Service/Initialize.js")
let riomdkpoc_rules_submit_entrypoint_js = __webpack_require__(/*! ./RioMDKPOC/Rules/Submit_EntryPoint.js */ "./build.definitions/RioMDKPOC/Rules/Submit_EntryPoint.js")
let riomdkpoc_rules_sync_uploadthendownload_js = __webpack_require__(/*! ./RioMDKPOC/Rules/Sync_UploadThenDownload.js */ "./build.definitions/RioMDKPOC/Rules/Sync_UploadThenDownload.js")
let riomdkpoc_rules_user_getfirstname_js = __webpack_require__(/*! ./RioMDKPOC/Rules/User/GetFirstName.js */ "./build.definitions/RioMDKPOC/Rules/User/GetFirstName.js")
let riomdkpoc_rules_user_getlastname_js = __webpack_require__(/*! ./RioMDKPOC/Rules/User/GetLastName.js */ "./build.definitions/RioMDKPOC/Rules/User/GetLastName.js")
let riomdkpoc_rules_user_savefirstname_js = __webpack_require__(/*! ./RioMDKPOC/Rules/User/SaveFirstName.js */ "./build.definitions/RioMDKPOC/Rules/User/SaveFirstName.js")
let riomdkpoc_rules_user_savelastname_js = __webpack_require__(/*! ./RioMDKPOC/Rules/User/SaveLastName.js */ "./build.definitions/RioMDKPOC/Rules/User/SaveLastName.js")
let riomdkpoc_rules_vis_isbool_js = __webpack_require__(/*! ./RioMDKPOC/Rules/Vis/IsBool.js */ "./build.definitions/RioMDKPOC/Rules/Vis/IsBool.js")
let riomdkpoc_rules_vis_istext_js = __webpack_require__(/*! ./RioMDKPOC/Rules/Vis/IsText.js */ "./build.definitions/RioMDKPOC/Rules/Vis/IsText.js")
let riomdkpoc_services_rioformsmdk_service = __webpack_require__(/*! ./RioMDKPOC/Services/RioFormsMDK.service */ "./build.definitions/RioMDKPOC/Services/RioFormsMDK.service")
let riomdkpoc_styles_styles_css = __webpack_require__(/*! ./RioMDKPOC/Styles/Styles.css */ "./build.definitions/RioMDKPOC/Styles/Styles.css")
let riomdkpoc_styles_styles_json = __webpack_require__(/*! ./RioMDKPOC/Styles/Styles.json */ "./build.definitions/RioMDKPOC/Styles/Styles.json")
let riomdkpoc_styles_styles_less = __webpack_require__(/*! ./RioMDKPOC/Styles/Styles.less */ "./build.definitions/RioMDKPOC/Styles/Styles.less")
let riomdkpoc_styles_styles_light_json = __webpack_require__(/*! ./RioMDKPOC/Styles/Styles.light.json */ "./build.definitions/RioMDKPOC/Styles/Styles.light.json")
let riomdkpoc_styles_styles_nss = __webpack_require__(/*! ./RioMDKPOC/Styles/Styles.nss */ "./build.definitions/RioMDKPOC/Styles/Styles.nss")
let tsconfig_json = __webpack_require__(/*! ./tsconfig.json */ "./build.definitions/tsconfig.json")
let version_mdkbundlerversion = __webpack_require__(/*! ./version.mdkbundlerversion */ "./build.definitions/version.mdkbundlerversion")

module.exports = {
	application_app : application_app,
	riomdkpoc_actions_application_appupdate_action : riomdkpoc_actions_application_appupdate_action,
	riomdkpoc_actions_application_appupdatefailuremessage_action : riomdkpoc_actions_application_appupdatefailuremessage_action,
	riomdkpoc_actions_application_appupdateprogressbanner_action : riomdkpoc_actions_application_appupdateprogressbanner_action,
	riomdkpoc_actions_application_appupdatesuccessmessage_action : riomdkpoc_actions_application_appupdatesuccessmessage_action,
	riomdkpoc_actions_application_logout_action : riomdkpoc_actions_application_logout_action,
	riomdkpoc_actions_application_navtoabout_action : riomdkpoc_actions_application_navtoabout_action,
	riomdkpoc_actions_application_navtoactivitylog_action : riomdkpoc_actions_application_navtoactivitylog_action,
	riomdkpoc_actions_application_navtosupport_action : riomdkpoc_actions_application_navtosupport_action,
	riomdkpoc_actions_application_onwillupdate_action : riomdkpoc_actions_application_onwillupdate_action,
	riomdkpoc_actions_application_reset_action : riomdkpoc_actions_application_reset_action,
	riomdkpoc_actions_application_resetmessage_action : riomdkpoc_actions_application_resetmessage_action,
	riomdkpoc_actions_application_usermenupopover_action : riomdkpoc_actions_application_usermenupopover_action,
	riomdkpoc_actions_closemodalpage_cancel_action : riomdkpoc_actions_closemodalpage_cancel_action,
	riomdkpoc_actions_closemodalpage_complete_action : riomdkpoc_actions_closemodalpage_complete_action,
	riomdkpoc_actions_closepage_action : riomdkpoc_actions_closepage_action,
	riomdkpoc_actions_errorarchive_errorarchive_syncfailure_action : riomdkpoc_actions_errorarchive_errorarchive_syncfailure_action,
	riomdkpoc_actions_errorarchive_navtoerrorarchive_detail_action : riomdkpoc_actions_errorarchive_navtoerrorarchive_detail_action,
	riomdkpoc_actions_errorarchive_navtoerrorarchive_list_action : riomdkpoc_actions_errorarchive_navtoerrorarchive_list_action,
	riomdkpoc_actions_genericbannermessage_action : riomdkpoc_actions_genericbannermessage_action,
	riomdkpoc_actions_genericmessagebox_action : riomdkpoc_actions_genericmessagebox_action,
	riomdkpoc_actions_genericnavigation_action : riomdkpoc_actions_genericnavigation_action,
	riomdkpoc_actions_generictoastmessage_action : riomdkpoc_actions_generictoastmessage_action,
	riomdkpoc_actions_logging_loguploadfailure_action : riomdkpoc_actions_logging_loguploadfailure_action,
	riomdkpoc_actions_logging_loguploadsuccessful_action : riomdkpoc_actions_logging_loguploadsuccessful_action,
	riomdkpoc_actions_logging_uploadlog_action : riomdkpoc_actions_logging_uploadlog_action,
	riomdkpoc_actions_logging_uploadlogprogress_action : riomdkpoc_actions_logging_uploadlogprogress_action,
	riomdkpoc_actions_navigation_closepage_action : riomdkpoc_actions_navigation_closepage_action,
	riomdkpoc_actions_navtoformdetail_action : riomdkpoc_actions_navtoformdetail_action,
	riomdkpoc_actions_odata_createanswer_fromcd_action : riomdkpoc_actions_odata_createanswer_fromcd_action,
	riomdkpoc_actions_odata_createformrecord_minimal_action : riomdkpoc_actions_odata_createformrecord_minimal_action,
	riomdkpoc_actions_rioformsmdk_service_closeoffline_action : riomdkpoc_actions_rioformsmdk_service_closeoffline_action,
	riomdkpoc_actions_rioformsmdk_service_closeofflinefailuremessage_action : riomdkpoc_actions_rioformsmdk_service_closeofflinefailuremessage_action,
	riomdkpoc_actions_rioformsmdk_service_closeofflinesuccessmessage_action : riomdkpoc_actions_rioformsmdk_service_closeofflinesuccessmessage_action,
	riomdkpoc_actions_rioformsmdk_service_downloadafterupload_action : riomdkpoc_actions_rioformsmdk_service_downloadafterupload_action,
	riomdkpoc_actions_rioformsmdk_service_downloadoffline_action : riomdkpoc_actions_rioformsmdk_service_downloadoffline_action,
	riomdkpoc_actions_rioformsmdk_service_downloadoffline_silent_action : riomdkpoc_actions_rioformsmdk_service_downloadoffline_silent_action,
	riomdkpoc_actions_rioformsmdk_service_downloadstartedmessage_action : riomdkpoc_actions_rioformsmdk_service_downloadstartedmessage_action,
	riomdkpoc_actions_rioformsmdk_service_initializeoffline_action : riomdkpoc_actions_rioformsmdk_service_initializeoffline_action,
	riomdkpoc_actions_rioformsmdk_service_initializeofflinefailuremessage_action : riomdkpoc_actions_rioformsmdk_service_initializeofflinefailuremessage_action,
	riomdkpoc_actions_rioformsmdk_service_initializeonlineweb_action : riomdkpoc_actions_rioformsmdk_service_initializeonlineweb_action,
	riomdkpoc_actions_rioformsmdk_service_syncfailuremessage_action : riomdkpoc_actions_rioformsmdk_service_syncfailuremessage_action,
	riomdkpoc_actions_rioformsmdk_service_syncstartedmessage_action : riomdkpoc_actions_rioformsmdk_service_syncstartedmessage_action,
	riomdkpoc_actions_rioformsmdk_service_uploadoffline_action : riomdkpoc_actions_rioformsmdk_service_uploadoffline_action,
	riomdkpoc_actions_rioformsmdk_service_uploadoffline_silent_action : riomdkpoc_actions_rioformsmdk_service_uploadoffline_silent_action,
	riomdkpoc_actions_submit_autosync_aftercs_action : riomdkpoc_actions_submit_autosync_aftercs_action,
	riomdkpoc_actions_submit_submitparentandchildren_cs_action : riomdkpoc_actions_submit_submitparentandchildren_cs_action,
	riomdkpoc_actions_util_alert_changesetfail_action : riomdkpoc_actions_util_alert_changesetfail_action,
	riomdkpoc_actions_util_alert_changesetok_action : riomdkpoc_actions_util_alert_changesetok_action,
	riomdkpoc_actions_util_alert_offlinequeued_action : riomdkpoc_actions_util_alert_offlinequeued_action,
	riomdkpoc_actions_util_alert_submitsyncedok_action : riomdkpoc_actions_util_alert_submitsyncedok_action,
	riomdkpoc_actions_util_alertmessage_action : riomdkpoc_actions_util_alertmessage_action,
	riomdkpoc_actions_util_toast_changesetfail_action : riomdkpoc_actions_util_toast_changesetfail_action,
	riomdkpoc_actions_util_toast_changesetok_action : riomdkpoc_actions_util_toast_changesetok_action,
	riomdkpoc_actions_util_toastmessage_action : riomdkpoc_actions_util_toastmessage_action,
	riomdkpoc_fragments_questionsection_fragment : riomdkpoc_fragments_questionsection_fragment,
	riomdkpoc_globals_application_appdefinition_version_global : riomdkpoc_globals_application_appdefinition_version_global,
	riomdkpoc_globals_application_applicationname_global : riomdkpoc_globals_application_applicationname_global,
	riomdkpoc_globals_application_supportemail_global : riomdkpoc_globals_application_supportemail_global,
	riomdkpoc_globals_application_supportphone_global : riomdkpoc_globals_application_supportphone_global,
	riomdkpoc_i18n_i18n_properties : riomdkpoc_i18n_i18n_properties,
	riomdkpoc_jsconfig_json : riomdkpoc_jsconfig_json,
	riomdkpoc_pages_application_about_page : riomdkpoc_pages_application_about_page,
	riomdkpoc_pages_application_support_page : riomdkpoc_pages_application_support_page,
	riomdkpoc_pages_application_useractivitylog_page : riomdkpoc_pages_application_useractivitylog_page,
	riomdkpoc_pages_errorarchive_errorarchive_detail_page : riomdkpoc_pages_errorarchive_errorarchive_detail_page,
	riomdkpoc_pages_errorarchive_errorarchive_list_page : riomdkpoc_pages_errorarchive_errorarchive_list_page,
	riomdkpoc_pages_formdetail_page : riomdkpoc_pages_formdetail_page,
	riomdkpoc_pages_main_page : riomdkpoc_pages_main_page,
	riomdkpoc_rules_application_appupdatefailure_js : riomdkpoc_rules_application_appupdatefailure_js,
	riomdkpoc_rules_application_appupdatesuccess_js : riomdkpoc_rules_application_appupdatesuccess_js,
	riomdkpoc_rules_application_clientismultiusermode_js : riomdkpoc_rules_application_clientismultiusermode_js,
	riomdkpoc_rules_application_getclientsupportversions_js : riomdkpoc_rules_application_getclientsupportversions_js,
	riomdkpoc_rules_application_getclientversion_js : riomdkpoc_rules_application_getclientversion_js,
	riomdkpoc_rules_application_onwillupdate_js : riomdkpoc_rules_application_onwillupdate_js,
	riomdkpoc_rules_application_resetappsettingsandlogout_js : riomdkpoc_rules_application_resetappsettingsandlogout_js,
	riomdkpoc_rules_buildchildren_incs_js : riomdkpoc_rules_buildchildren_incs_js,
	riomdkpoc_rules_childprops_getbool_fromcd_js : riomdkpoc_rules_childprops_getbool_fromcd_js,
	riomdkpoc_rules_childprops_getquestionid_fromcd_js : riomdkpoc_rules_childprops_getquestionid_fromcd_js,
	riomdkpoc_rules_childprops_gettext_fromcd_js : riomdkpoc_rules_childprops_gettext_fromcd_js,
	riomdkpoc_rules_logging_loglevels_js : riomdkpoc_rules_logging_loglevels_js,
	riomdkpoc_rules_logging_settracecategories_js : riomdkpoc_rules_logging_settracecategories_js,
	riomdkpoc_rules_logging_setuserloglevel_js : riomdkpoc_rules_logging_setuserloglevel_js,
	riomdkpoc_rules_logging_togglelogging_js : riomdkpoc_rules_logging_togglelogging_js,
	riomdkpoc_rules_logging_tracecategories_js : riomdkpoc_rules_logging_tracecategories_js,
	riomdkpoc_rules_logging_userlogsetting_js : riomdkpoc_rules_logging_userlogsetting_js,
	riomdkpoc_rules_main_main_onloaded_js : riomdkpoc_rules_main_main_onloaded_js,
	riomdkpoc_rules_main_main_onreturning_js : riomdkpoc_rules_main_main_onreturning_js,
	riomdkpoc_rules_main_main_onunloaded_js : riomdkpoc_rules_main_main_onunloaded_js,
	riomdkpoc_rules_network_getonlinebadge_js : riomdkpoc_rules_network_getonlinebadge_js,
	riomdkpoc_rules_onformdetailloaded_js : riomdkpoc_rules_onformdetailloaded_js,
	riomdkpoc_rules_parentprops_getfirstname_frompage_js : riomdkpoc_rules_parentprops_getfirstname_frompage_js,
	riomdkpoc_rules_parentprops_getlastname_frompage_js : riomdkpoc_rules_parentprops_getlastname_frompage_js,
	riomdkpoc_rules_rioformsmdk_errorarchive_checkforsyncerror_js : riomdkpoc_rules_rioformsmdk_errorarchive_checkforsyncerror_js,
	riomdkpoc_rules_service_initialize_js : riomdkpoc_rules_service_initialize_js,
	riomdkpoc_rules_submit_entrypoint_js : riomdkpoc_rules_submit_entrypoint_js,
	riomdkpoc_rules_sync_uploadthendownload_js : riomdkpoc_rules_sync_uploadthendownload_js,
	riomdkpoc_rules_user_getfirstname_js : riomdkpoc_rules_user_getfirstname_js,
	riomdkpoc_rules_user_getlastname_js : riomdkpoc_rules_user_getlastname_js,
	riomdkpoc_rules_user_savefirstname_js : riomdkpoc_rules_user_savefirstname_js,
	riomdkpoc_rules_user_savelastname_js : riomdkpoc_rules_user_savelastname_js,
	riomdkpoc_rules_vis_isbool_js : riomdkpoc_rules_vis_isbool_js,
	riomdkpoc_rules_vis_istext_js : riomdkpoc_rules_vis_istext_js,
	riomdkpoc_services_rioformsmdk_service : riomdkpoc_services_rioformsmdk_service,
	riomdkpoc_styles_styles_css : riomdkpoc_styles_styles_css,
	riomdkpoc_styles_styles_json : riomdkpoc_styles_styles_json,
	riomdkpoc_styles_styles_less : riomdkpoc_styles_styles_less,
	riomdkpoc_styles_styles_light_json : riomdkpoc_styles_styles_light_json,
	riomdkpoc_styles_styles_nss : riomdkpoc_styles_styles_nss,
	tsconfig_json : tsconfig_json,
	version_mdkbundlerversion : version_mdkbundlerversion
}

/***/ }),

/***/ "./build.definitions/RioMDKPOC/Rules/Application/AppUpdateFailure.js":
/*!***************************************************************************!*\
  !*** ./build.definitions/RioMDKPOC/Rules/Application/AppUpdateFailure.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AppUpdateFailure)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function AppUpdateFailure(clientAPI) {
  let result = clientAPI.actionResults.AppUpdate.error.toString();
  var message;
  console.log(result);
  if (result.startsWith('Error: Uncaught app extraction failure:')) {
    result = 'Error: Uncaught app extraction failure:';
  }
  if (result.startsWith('Error: LCMS GET Version Response Error Response Status: 404 | Body: 404 Not Found: Requested route')) {
    result = 'Application instance is not up or running';
  }
  if (result.startsWith('Error: LCMS GET Version Response Error Response Status: 404 | Body')) {
    result = 'Service instance not found.';
  }
  switch (result) {
    case 'Service instance not found.':
      message = 'Mobile App Update feature is not assigned or not running for your application. Please add the Mobile App Update feature, deploy your application, and try again.';
      break;
    case 'Error: LCMS GET Version Response Error Response Status: 404 | Body: Failed to find a matched endpoint':
      message = 'Mobile App Update feature is not assigned to your application. Please add the Mobile App Update feature, deploy your application, and try again.';
      break;
    case 'Error: LCMS GET Version Response failed: Error: Optional(OAuth2Error.tokenRejected: The newly acquired or refreshed token got rejected.)':
      message = 'The Mobile App Update feature is not assigned to your application or there is no Application metadata deployed. Please check your application in Mobile Services and try again.';
      break;
    case 'Error: Uncaught app extraction failure:':
      message = 'Error extracting metadata. Please redeploy and try again.';
      break;
    case 'Application instance is not up or running':
      message = 'Communication failure. Verify that the BindMobileApplicationRoutesToME Application route is running in your BTP space cockpit.';
      break;
    default:
      message = result;
      break;
  }
  return clientAPI.getPageProxy().executeAction({
    "Name": "/RioMDKPOC/Actions/Application/AppUpdateFailureMessage.action",
    "Properties": {
      "Duration": 0,
      "Message": message
    }
  });
}

/***/ }),

/***/ "./build.definitions/RioMDKPOC/Rules/Application/AppUpdateSuccess.js":
/*!***************************************************************************!*\
  !*** ./build.definitions/RioMDKPOC/Rules/Application/AppUpdateSuccess.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AppUpdateSuccess)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function sleep(ms) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve();
    }, ms);
  });
}
function AppUpdateSuccess(clientAPI) {
  var message;
  // Force a small pause to let the progress banner show in case there is no new version available
  return sleep(500).then(function () {
    let result = clientAPI.actionResults.AppUpdate.data;
    console.log(result);
    let versionNum = result.split(': ')[1];
    if (result.startsWith('Current version is already up to date')) {
      return clientAPI.getPageProxy().executeAction({
        "Name": "/RioMDKPOC/Actions/Application/AppUpdateSuccessMessage.action",
        "Properties": {
          "Message": `You are already using the latest version: ${versionNum}`,
          "NumberOfLines": 2
        }
      });
    } else if (result === 'AppUpdate feature is not enabled or no new revision found.') {
      message = 'No Application metadata found. Please deploy your application and try again.';
      return clientAPI.getPageProxy().executeAction({
        "Name": "/RioMDKPOC/Actions/Application/AppUpdateSuccessMessage.action",
        "Properties": {
          "Duration": 5,
          "Message": message,
          "NumberOfLines": 2
        }
      });
    }
  });
}

/***/ }),

/***/ "./build.definitions/RioMDKPOC/Rules/Application/ClientIsMultiUserMode.js":
/*!********************************************************************************!*\
  !*** ./build.definitions/RioMDKPOC/Rules/Application/ClientIsMultiUserMode.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ClientIsMultiUserMode)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function ClientIsMultiUserMode(clientAPI) {
  return clientAPI.isAppInMultiUserMode();
}

/***/ }),

/***/ "./build.definitions/RioMDKPOC/Rules/Application/GetClientSupportVersions.js":
/*!***********************************************************************************!*\
  !*** ./build.definitions/RioMDKPOC/Rules/Application/GetClientSupportVersions.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GetClientSupportVersions)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function GetClientSupportVersions(clientAPI) {
  let versionInfo = clientAPI.getVersionInfo();
  let versionStr = '';
  Object.keys(versionInfo).forEach(function (key, index) {
    // key: the name of the object key
    // index: the ordinal position of the key within the object
    //console.log(`Key: ${key}   Index: ${index}`);
    if (key != 'Application Version') {
      versionStr += `${key}: ${versionInfo[key]}\n`;
    }
  });
  return versionStr;
}

/***/ }),

/***/ "./build.definitions/RioMDKPOC/Rules/Application/GetClientVersion.js":
/*!***************************************************************************!*\
  !*** ./build.definitions/RioMDKPOC/Rules/Application/GetClientVersion.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GetClientVersion)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function GetClientVersion(clientAPI) {
  let versionInfo = clientAPI.getVersionInfo();
  if (versionInfo.hasOwnProperty('Application Version')) {
    return versionInfo['Application Version'];
  }
}

/***/ }),

/***/ "./build.definitions/RioMDKPOC/Rules/Application/OnWillUpdate.js":
/*!***********************************************************************!*\
  !*** ./build.definitions/RioMDKPOC/Rules/Application/OnWillUpdate.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ OnWillUpdate)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function OnWillUpdate(clientAPI) {
  return clientAPI.executeAction('/RioMDKPOC/Actions/Application/OnWillUpdate.action').then(result => {
    if (result.data) {
      return clientAPI.executeAction('/RioMDKPOC/Actions/RioFormsMDK/Service/CloseOffline.action').then(success => Promise.resolve(success), failure => Promise.reject('Offline Odata Close Failed ' + failure));
    } else {
      return Promise.reject('User Deferred');
    }
  });
}

/***/ }),

/***/ "./build.definitions/RioMDKPOC/Rules/Application/ResetAppSettingsAndLogout.js":
/*!************************************************************************************!*\
  !*** ./build.definitions/RioMDKPOC/Rules/Application/ResetAppSettingsAndLogout.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ResetAppSettingsAndLogout)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function ResetAppSettingsAndLogout(clientAPI) {
  let logger = clientAPI.getLogger();
  let platform = clientAPI.nativescript.platformModule;
  let appSettings = clientAPI.nativescript.appSettingsModule;
  var appId;
  if (platform && (platform.isIOS || platform.isAndroid)) {
    appId = clientAPI.evaluateTargetPath('#Application/#AppData/MobileServiceAppId');
  } else {
    appId = 'WindowsClient';
  }
  try {
    // Remove any other app specific settings
    appSettings.getAllKeys().forEach(key => {
      if (key.substring(0, appId.length) === appId) {
        appSettings.remove(key);
      }
    });
  } catch (err) {
    logger.log(`ERROR: AppSettings cleanup failure - ${err}`, 'ERROR');
  } finally {
    // Logout 
    return clientAPI.getPageProxy().executeAction('/RioMDKPOC/Actions/Application/Reset.action');
  }
}

/***/ }),

/***/ "./build.definitions/RioMDKPOC/Rules/BuildChildren_InCS.js":
/*!*****************************************************************!*\
  !*** ./build.definitions/RioMDKPOC/Rules/BuildChildren_InCS.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BuildChildren_InCS)
/* harmony export */ });
function BuildChildren_InCS(clientAPI) {
  const toast = msg => clientAPI.executeAction({
    Name: "/RioMDKPOC/Actions/Util/ToastMessage.action",
    Properties: {
      Message: msg.length > 200 ? msg.slice(0, 200) + "…" : msg
    }
  });
  return (async () => {
    const page = clientAPI.getPageProxy();
    const cd = page.getClientData();
    const arr = Array.isArray(cd.childPayloads) ? cd.childPayloads : [];
    if (!arr.length) {
      await toast("No answers to submit (childPayloads empty)");
      return true;
    }
    for (let i = 0; i < arr.length; i++) {
      cd.childIndex = i;
      await clientAPI.executeAction("/RioMDKPOC/Actions/OData/CreateAnswer_FromCD.action");
    }
    await toast(`Queued ${arr.length} child record(s).`);
    return true;
  })().catch(err => clientAPI.executeAction({
    Name: "/RioMDKPOC/Actions/Util/ToastMessage.action",
    Properties: {
      Message: `Child create failed: ${err?.message || err}`
    }
  }));
}

/***/ }),

/***/ "./build.definitions/RioMDKPOC/Rules/ChildProps/GetBool_FromCD.js":
/*!************************************************************************!*\
  !*** ./build.definitions/RioMDKPOC/Rules/ChildProps/GetBool_FromCD.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GetBool_FromCD)
/* harmony export */ });
function GetBool_FromCD(clientAPI) {
  const cd = clientAPI.getPageProxy().getClientData();
  const i = cd.childIndex ?? 0;
  const arr = cd.childPayloads || [];
  const v = arr[i]?.boolAnswer;
  if (typeof v === 'boolean') return v;
  if (v === 'true') return true;
  if (v === 'false') return false;
  return undefined;
}

/***/ }),

/***/ "./build.definitions/RioMDKPOC/Rules/ChildProps/GetQuestionID_FromCD.js":
/*!******************************************************************************!*\
  !*** ./build.definitions/RioMDKPOC/Rules/ChildProps/GetQuestionID_FromCD.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GetQuestionID_FromCD)
/* harmony export */ });
function GetQuestionID_FromCD(clientAPI) {
  const cd = clientAPI.getPageProxy().getClientData();
  const i = cd.childIndex ?? 0;
  const arr = cd.childPayloads || [];
  const val = arr[i]?.question_ID ?? null;
  return val;
}

/***/ }),

/***/ "./build.definitions/RioMDKPOC/Rules/ChildProps/GetText_FromCD.js":
/*!************************************************************************!*\
  !*** ./build.definitions/RioMDKPOC/Rules/ChildProps/GetText_FromCD.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GetText_FromCD)
/* harmony export */ });
function GetText_FromCD(clientAPI) {
  const cd = clientAPI.getPageProxy().getClientData();
  const i = cd.childIndex ?? 0;
  const arr = cd.childPayloads || [];
  const val = arr[i]?.textAnswer ?? "";
  return val;
}

/***/ }),

/***/ "./build.definitions/RioMDKPOC/Rules/Logging/LogLevels.js":
/*!****************************************************************!*\
  !*** ./build.definitions/RioMDKPOC/Rules/Logging/LogLevels.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LogLevels)
/* harmony export */ });
function LogLevels(clientAPI) {
  var levels = [];
  levels.push({
    'DisplayValue': 'Error',
    'ReturnValue': 'Error'
  });
  levels.push({
    'DisplayValue': 'Warning',
    'ReturnValue': 'Warn'
  });
  levels.push({
    'DisplayValue': 'Info',
    'ReturnValue': 'Info'
  });
  levels.push({
    'DisplayValue': 'Debug',
    'ReturnValue': 'Debug'
  });
  levels.push({
    'DisplayValue': 'Trace',
    'ReturnValue': 'Trace'
  });
  return levels;
}

/***/ }),

/***/ "./build.definitions/RioMDKPOC/Rules/Logging/SetTraceCategories.js":
/*!*************************************************************************!*\
  !*** ./build.definitions/RioMDKPOC/Rules/Logging/SetTraceCategories.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SetTraceCategories)
/* harmony export */ });
function SetTraceCategories(clientAPI) {
  var logger = clientAPI.getLogger();
  const sectionedTable = clientAPI.getPageProxy().getControl('SectionedTable');
  const fcsection = sectionedTable.getSection('FormCellSection0');
  const traceCategory = fcsection.getControl('TracingCategoriesListPicker');
  const odataTrace = fcsection.getControl('odataTrace');
  try {
    if (traceCategory.getValue()) {
      var values = traceCategory.getValue();
      var categories = [];
      if (values && values.length) {
        categories = values.map(value => {
          return 'mdk.trace.' + value.ReturnValue;
        });
      }
      clientAPI.setDebugSettings(odataTrace.getValue(), true, categories);
    }
  } catch (exception) {
    logger.log(String(exception), 'Error');
    return undefined;
  }
}

/***/ }),

/***/ "./build.definitions/RioMDKPOC/Rules/Logging/SetUserLogLevel.js":
/*!**********************************************************************!*\
  !*** ./build.definitions/RioMDKPOC/Rules/Logging/SetUserLogLevel.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SetUserLogLevel)
/* harmony export */ });
function SetUserLogLevel(clientAPI) {
  try {
    if (clientAPI.getValue() && clientAPI.getValue()[0]) {
      var logger = clientAPI.getLogger();
      var listPickerValue = clientAPI.getValue()[0].ReturnValue;
      if (listPickerValue) {
        switch (listPickerValue) {
          case 'Debug':
            logger.setLevel('Debug');
            ShowTraceOptions(clientAPI, false);
            break;
          case 'Error':
            logger.setLevel('Error');
            ShowTraceOptions(clientAPI, false);
            break;
          case 'Warn':
            logger.setLevel('Warn');
            ShowTraceOptions(clientAPI, false);
            break;
          case 'Info':
            logger.setLevel('Info');
            ShowTraceOptions(clientAPI, false);
            break;
          case 'Trace':
            logger.setLevel('Trace');
            ShowTraceOptions(clientAPI, true);
            break;
          default:
            // eslint-disable-next-line no-console
            console.log(`unrecognized key ${listPickerValue}`);
        }
        return listPickerValue;
      }
    }
  } catch (exception) {
    logger.log(String(exception), 'Error');
    return undefined;
  }
}
function ShowTraceOptions(clientAPI, tracingEnabled) {
  let categories = clientAPI.getPageProxy().getControl('SectionedTable').getControl('TracingCategoriesListPicker');
  let odataTrace = clientAPI.getPageProxy().getControl('SectionedTable').getControl('odataTrace');
  categories.setVisible(tracingEnabled);
  odataTrace.setVisible(tracingEnabled);
}

/***/ }),

/***/ "./build.definitions/RioMDKPOC/Rules/Logging/ToggleLogging.js":
/*!********************************************************************!*\
  !*** ./build.definitions/RioMDKPOC/Rules/Logging/ToggleLogging.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ToggleLogging)
/* harmony export */ });
function ToggleLogging(clientAPI) {
  try {
    var logger = clientAPI.getLogger();
    const sectionedTable = clientAPI.getPageProxy().getControl('SectionedTable');
    const fcsection = sectionedTable.getSection('FormCellSection0');
    const enableLogSwitch = fcsection.getControl('EnableLogSwitch');
    const logLevelListPicker = fcsection.getControl('LogLevelListPicker');
    let switchValue = enableLogSwitch.getValue();
    if (switchValue) {
      logger.on();
      logLevelListPicker.setVisible(true);
      logLevelListPicker.setEditable(true);
      logLevelListPicker.redraw();
    } else {
      logger.off();
      logLevelListPicker.setEditable(false);
      logLevelListPicker.setVisible(false);
      logLevelListPicker.redraw();
    }
    return switchValue;
  } catch (exception) {
    logger.log(String(exception), 'Error');
    return undefined;
  }
}

/***/ }),

/***/ "./build.definitions/RioMDKPOC/Rules/Logging/TraceCategories.js":
/*!**********************************************************************!*\
  !*** ./build.definitions/RioMDKPOC/Rules/Logging/TraceCategories.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TraceCategories)
/* harmony export */ });
function TraceCategories(clientAPI) {
  var categories = ['action', 'api', 'app', 'binding', 'branding', 'core', 'i18n', 'lcms', 'logging', 'odata', 'onboarding', 'profiling', 'push', 'restservice', 'settings', 'targetpath', 'ui'];
  var values = [];
  categories.forEach(category => {
    values.push({
      'DisplayValue': category,
      'ReturnValue': category
    });
  });
  return values;
}

/***/ }),

/***/ "./build.definitions/RioMDKPOC/Rules/Logging/UserLogSetting.js":
/*!*********************************************************************!*\
  !*** ./build.definitions/RioMDKPOC/Rules/Logging/UserLogSetting.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UserLogSetting)
/* harmony export */ });
function UserLogSetting(clientAPI) {
  try {
    var logger = clientAPI.getLogger();
    const sectionedTable = clientAPI.getControl('SectionedTable');
    const fcsection = sectionedTable.getSection('FormCellSection0');
    const enableLogSwitch = fcsection.getControl('EnableLogSwitch');
    const logLevelListPicker = fcsection.getControl('LogLevelListPicker');
    const traceCategory = fcsection.getControl('TracingCategoriesListPicker');
    const odataTrace = fcsection.getControl('odataTrace');

    //Persist the user logging preferences
    if (logger) {
      console.log("in logger state");
      if (logger.isTurnedOn()) {
        if (enableLogSwitch) {
          enableLogSwitch.setValue(true);
        }
        if (logLevelListPicker) {
          logLevelListPicker.setEditable(true);
        }
      } else {
        if (enableLogSwitch) {
          enableLogSwitch.setValue(false);
        }
        if (logLevelListPicker) {
          logLevelListPicker.setEditable(false);
        }
      }
      var logLevel = logger.getLevel();
      if (logLevel) {
        if (logLevelListPicker) {
          logLevelListPicker.setValue([logLevel]);
        }
      }
      if (logLevel === 'Trace') {
        traceCategory.setVisible(true);
        odataTrace.setVisible(true);
      }

      //Upon selecting a value in the List picker and clicking the back button 
      //will enable the onload page rule. This will set the selected value
      //in the control
      if (logLevelListPicker.getValue()[0]) {
        var returnValue = logLevelListPicker.getValue()[0].ReturnValue;
        if (returnValue) {
          logLevelListPicker.setValue([returnValue]);
          logger.setLevel(returnValue);
        }
      }
    }
  } catch (exception) {
    // eslint-disable-next-line no-console
    console.log(String(exception), 'Error User Logger could not be set');
  }
}

/***/ }),

/***/ "./build.definitions/RioMDKPOC/Rules/Main/Main_OnLoaded.js":
/*!*****************************************************************!*\
  !*** ./build.definitions/RioMDKPOC/Rules/Main/Main_OnLoaded.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Main_OnLoaded)
/* harmony export */ });
function Main_OnLoaded(clientAPI) {
  const page = clientAPI.getPageProxy();
  const cd = page.getClientData();

  // Clean old handlers
  try {
    cd._netStop && cd._netStop();
  } catch {}
  try {
    cd._netTimer && clearInterval(cd._netTimer);
  } catch {}
  cd._netStop = null;
  cd._netTimer = null;
  cd._lastOnline = undefined;
  cd._syncInFlight = false;
  cd._lastSyncTs = 0;
  const connectivity = __webpack_require__(/*! @nativescript/core/connectivity */ "@nativescript/core/connectivity");
  const triggerSyncIfCameOnline = () => {
    // Only when transitioning from offline -> online
    if (cd._lastOnline === false) {
      const now = Date.now();
      if (cd._syncInFlight) return; // already running
      if (now - (cd._lastSyncTs || 0) < 10000) return; // 10s debounce

      cd._syncInFlight = true;
      cd._lastSyncTs = now;
      clientAPI.executeAction("/RioMDKPOC/Actions/RioFormsMDK/Service/UploadOffline_Silent.action").then(() => clientAPI.executeAction("/RioMDKPOC/Actions/RioFormsMDK/Service/DownloadOffline_Silent.action")).catch(() => {/* ignore offline/server blips */}).finally(() => {
        cd._syncInFlight = false;
      });
    }
  };
  const setStatus = () => {
    try {
      const table = page.getControl('SectionedTable_Main');
      const sections = table?.getSections?.() || [];
      const statusSec = sections.find(s => s?.getName?.() === 'StatusSection') || sections[0];
      const field = statusSec?.getControl?.('NetStatus');
      if (!field) return;
      const type = connectivity.getConnectionType();
      const online = type !== connectivity.connectionType.none;

      // Update UI only when changed
      if (cd._lastOnline !== online) {
        field.setValue(online ? 'Online' : 'Offline');
        // If we just became online, trigger a background sync
        if (online) triggerSyncIfCameOnline();
        cd._lastOnline = online;
      }
    } catch {}
  };

  // Initial status + possibly initial sync
  setStatus();

  // Event-based monitoring
  connectivity.startMonitoring(() => setStatus());
  cd._netStop = () => connectivity.stopMonitoring();

  // Polling fallback (some devices skip the event)
  cd._netTimer = setInterval(setStatus, 3000);
  return true;
}

/***/ }),

/***/ "./build.definitions/RioMDKPOC/Rules/Main/Main_OnReturning.js":
/*!********************************************************************!*\
  !*** ./build.definitions/RioMDKPOC/Rules/Main/Main_OnReturning.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Main_OnReturning)
/* harmony export */ });
function Main_OnReturning(clientAPI) {
  const page = clientAPI.getPageProxy();
  const cd = page.getClientData();

  // Re-start clean (same as OnLoaded)
  try {
    cd._netStop && cd._netStop();
  } catch {}
  try {
    cd._netTimer && clearInterval(cd._netTimer);
  } catch {}
  cd._netStop = null;
  cd._netTimer = null;
  cd._syncInFlight = false;
  cd._lastSyncTs = cd._lastSyncTs || 0;
  const connectivity = __webpack_require__(/*! @nativescript/core/connectivity */ "@nativescript/core/connectivity");
  const triggerSyncIfCameOnline = () => {
    if (cd._lastOnline === false) {
      const now = Date.now();
      if (cd._syncInFlight) return;
      if (now - (cd._lastSyncTs || 0) < 10000) return;
      cd._syncInFlight = true;
      cd._lastSyncTs = now;
      clientAPI.executeAction("/RioMDKPOC/Actions/RioFormsMDK/Service/UploadOffline_Silent.action").then(() => clientAPI.executeAction("/RioMDKPOC/Actions/RioFormsMDK/Service/DownloadOffline_Silent.action")).catch(() => {}).finally(() => {
        cd._syncInFlight = false;
      });
    }
  };
  const setStatus = () => {
    try {
      const table = page.getControl('SectionedTable_Main');
      const sections = table?.getSections?.() || [];
      const statusSec = sections.find(s => s?.getName?.() === 'StatusSection') || sections[0];
      const field = statusSec?.getControl?.('NetStatus');
      if (!field) return;
      const type = connectivity.getConnectionType();
      const online = type !== connectivity.connectionType.none;
      if (cd._lastOnline !== online) {
        field.setValue(online ? 'Online' : 'Offline');
        if (online) triggerSyncIfCameOnline();
        cd._lastOnline = online;
      } else {
        // Ensure the label is correct on return
        field.setValue(online ? 'Online' : 'Offline');
      }
    } catch {}
  };

  // Immediate check + monitoring + polling
  setStatus();
  connectivity.startMonitoring(() => setStatus());
  cd._netStop = () => connectivity.stopMonitoring();
  cd._netTimer = setInterval(setStatus, 3000);
  return true;
}

/***/ }),

/***/ "./build.definitions/RioMDKPOC/Rules/Main/Main_OnUnloaded.js":
/*!*******************************************************************!*\
  !*** ./build.definitions/RioMDKPOC/Rules/Main/Main_OnUnloaded.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Main_OnUnloaded)
/* harmony export */ });
function Main_OnUnloaded(clientAPI) {
  const page = clientAPI.getPageProxy();
  const cd = page.getClientData();
  try {
    cd._netStop && cd._netStop();
  } catch {}
  try {
    cd._netTimer && clearInterval(cd._netTimer);
  } catch {}
  cd._netStop = null;
  cd._netTimer = null;
  return true;
}

/***/ }),

/***/ "./build.definitions/RioMDKPOC/Rules/Network/GetOnlineBadge.js":
/*!*********************************************************************!*\
  !*** ./build.definitions/RioMDKPOC/Rules/Network/GetOnlineBadge.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GetOnlineBadge)
/* harmony export */ });
/* harmony import */ var _nativescript_core_connectivity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nativescript/core/connectivity */ "@nativescript/core/connectivity");
/* harmony import */ var _nativescript_core_connectivity__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_nativescript_core_connectivity__WEBPACK_IMPORTED_MODULE_0__);
// Returns "Online" or "Offline" based on current connectivity

function GetOnlineBadge(clientAPI) {
  const online = (0,_nativescript_core_connectivity__WEBPACK_IMPORTED_MODULE_0__.getConnectionType)() !== _nativescript_core_connectivity__WEBPACK_IMPORTED_MODULE_0__.connectionType.none;
  return online ? "Online" : "Offline";
}

/***/ }),

/***/ "./build.definitions/RioMDKPOC/Rules/OnFormDetailLoaded.js":
/*!*****************************************************************!*\
  !*** ./build.definitions/RioMDKPOC/Rules/OnFormDetailLoaded.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ OnFormDetailLoaded)
/* harmony export */ });
function OnFormDetailLoaded(context) {
  const page = context.getPageProxy();
  page.getClientData().FormID = page.binding && page.binding.ID;
  return true;
}

/***/ }),

/***/ "./build.definitions/RioMDKPOC/Rules/ParentProps/GetFirstName_FromPage.js":
/*!********************************************************************************!*\
  !*** ./build.definitions/RioMDKPOC/Rules/ParentProps/GetFirstName_FromPage.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GetFirstName_FromPage)
/* harmony export */ });
function GetFirstName_FromPage(clientAPI) {
  try {
    const ctrl = clientAPI.evaluateTargetPathForAPI("#Control:FirstNameInput");
    const v = ctrl && typeof ctrl.getValue === "function" ? ctrl.getValue() : "";
    return v == null ? "" : String(v);
  } catch (e) {
    return "";
  }
}

/***/ }),

/***/ "./build.definitions/RioMDKPOC/Rules/ParentProps/GetLastName_FromPage.js":
/*!*******************************************************************************!*\
  !*** ./build.definitions/RioMDKPOC/Rules/ParentProps/GetLastName_FromPage.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GetLastName_FromPage)
/* harmony export */ });
function GetLastName_FromPage(clientAPI) {
  try {
    const ctrl = clientAPI.evaluateTargetPathForAPI("#Control:LastNameInput");
    const v = ctrl && typeof ctrl.getValue === "function" ? ctrl.getValue() : "";
    return v == null ? "" : String(v);
  } catch (e) {
    return "";
  }
}

/***/ }),

/***/ "./build.definitions/RioMDKPOC/Rules/RioFormsMDK/ErrorArchive_CheckForSyncError.js":
/*!*****************************************************************************************!*\
  !*** ./build.definitions/RioMDKPOC/Rules/RioFormsMDK/ErrorArchive_CheckForSyncError.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CheckForSyncError)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} context
 */
function CheckForSyncError(context) {
  context.count('/RioMDKPOC/Services/RioFormsMDK.service', 'ErrorArchive', '').then(errorCount => {
    if (errorCount > 0) {
      return context.getPageProxy().executeAction('/RioMDKPOC/Actions/ErrorArchive/ErrorArchive_SyncFailure.action').then(function () {
        return Promise.reject(false);
      });
    }
  });
}

/***/ }),

/***/ "./build.definitions/RioMDKPOC/Rules/Service/Initialize.js":
/*!*****************************************************************!*\
  !*** ./build.definitions/RioMDKPOC/Rules/Service/Initialize.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Initialize)
/* harmony export */ });
function Initialize(context) {
  // Perform pre data initialization task

  // Initialize all your Data sources
  let _RioFormsMDK = context.executeAction('/RioMDKPOC/Actions/RioFormsMDK/Service/InitializeOffline.action');

  //You can add more service initialize actions here

  return Promise.all([_RioFormsMDK]).then(() => {
    // After Initializing the DB connections

    // Display successful initialization  message to the user
    return context.executeAction({
      "Name": "/RioMDKPOC/Actions/GenericToastMessage.action",
      "Properties": {
        "Message": "Application Services Initialized",
        "Animated": true,
        "Duration": 1,
        "IsIconHidden": true,
        "NumberOfLines": 1
      }
    });
  }).catch(() => {
    return false;
  });
}

/***/ }),

/***/ "./build.definitions/RioMDKPOC/Rules/Submit_EntryPoint.js":
/*!****************************************************************!*\
  !*** ./build.definitions/RioMDKPOC/Rules/Submit_EntryPoint.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Submit_EntryPoint)
/* harmony export */ });
/* harmony import */ var _nativescript_core_application_settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nativescript/core/application-settings */ "@nativescript/core/application-settings");
/* harmony import */ var _nativescript_core_application_settings__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_nativescript_core_application_settings__WEBPACK_IMPORTED_MODULE_0__);

function Submit_EntryPoint(clientAPI) {
  const page = clientAPI.getPageProxy();
  const toast = Message => clientAPI.executeAction({
    Name: "/RioMDKPOC/Actions/Util/ToastMessage.action",
    Properties: {
      Message
    }
  });
  const connectivity = __webpack_require__(/*! @nativescript/core/connectivity */ "@nativescript/core/connectivity");
  const isOnline = () => connectivity.getConnectionType() !== connectivity.connectionType.none;
  return (async () => {
    // 1) Collect answers
    const sections = page.getControl("SectionedTable0")?.getSections?.() || [];
    const childPayloads = [];
    for (const s of sections) {
      let b = null;
      try {
        b = s?.getBindingObject ? s.getBindingObject() : s?.getBindingContext?.().binding || s?.binding;
      } catch {}
      const t = Number(b?.type_code);
      const qid = b?.ID;
      if (!qid || !t || t === 3) continue;
      const item = {
        question_ID: qid
      };
      if (t === 1) item.textAnswer = String(s.getControl?.("Q_Text")?.getValue?.() ?? "");
      if (t === 2) item.boolAnswer = !!s.getControl?.("Q_Bool")?.getValue?.();
      childPayloads.push(item);
    }

    // 2) Stash children for the CS rule
    const cd = page.getClientData();
    cd.childPayloads = childPayloads;
    cd.childIndex = -1;

    // 3) Read persisted names and pass as ActionBinding to the ChangeSet
    const firstName = (0,_nativescript_core_application_settings__WEBPACK_IMPORTED_MODULE_0__.getString)("userFirstName", "");
    const lastName = (0,_nativescript_core_application_settings__WEBPACK_IMPORTED_MODULE_0__.getString)("userLastName", "");
    try {
      await clientAPI.executeAction({
        Name: "/RioMDKPOC/Actions/Submit/SubmitParentAndChildren_CS.action",
        ActionBinding: {
          firstName,
          lastName
        }
      });
    } catch (e) {
      const msg = (e && e.message ? e.message : String(e)).toLowerCase();
      const offlineLike = !isOnline() || msg.includes("offline") || msg.includes("socket") || msg.includes("-10292");
      if (offlineLike) {
        await toast("Saved offline. Will sync when online.");
        await clientAPI.executeAction("/RioMDKPOC/Actions/Navigation/ClosePage.action");
        return true;
      }
      await toast(`Submit failed: ${e?.message || e}`);
      return false;
    }

    // 4) Success toast + optional silent sync if online
    if (isOnline()) {
      await toast("Submitted");
      clientAPI.executeAction("/RioMDKPOC/Actions/RioFormsMDK/Service/UploadOffline_Silent.action").then(() => clientAPI.executeAction("/RioMDKPOC/Actions/RioFormsMDK/Service/DownloadOffline_Silent.action")).catch(() => {});
    } else {
      await toast("Saved offline. Will sync when online.");
    }

    // 5) Close page
    await clientAPI.executeAction("/RioMDKPOC/Actions/Navigation/ClosePage.action");
    return true;
  })();
}

/***/ }),

/***/ "./build.definitions/RioMDKPOC/Rules/Sync_UploadThenDownload.js":
/*!**********************************************************************!*\
  !*** ./build.definitions/RioMDKPOC/Rules/Sync_UploadThenDownload.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Sync_UploadThenDownload)
/* harmony export */ });
function Sync_UploadThenDownload(clientAPI) {
  const alert = (Message, Title = "Sync") => clientAPI.executeAction({
    Name: "/RioMDKPOC/Actions/Util/AlertMessage.action",
    Properties: {
      Title,
      Message: String(Message)
    }
  });
  return (async () => {
    const log = [];
    const step = async (label, actionPath) => {
      log.push(`→ ${label}`);
      try {
        await clientAPI.executeAction(actionPath);
        log.push(`✓ ${label}`);
      } catch (e) {
        log.push(`✗ ${label}: ${e?.message || e}`);
      }
    };
    log.push("Starting sync");

    // Safe to run even if already initialized
    await step("Initialize", "/RioMDKPOC/Actions/RioFormsMDK/Service/InitializeOffline.action");
    await step("Download", "/RioMDKPOC/Actions/RioFormsMDK/Service/DownloadOffline.action");
    await step("Upload", "/RioMDKPOC/Actions/RioFormsMDK/Service/UploadOffline.action");
    await step("Final pull", "/RioMDKPOC/Actions/RioFormsMDK/Service/DownloadOffline.action");
    log.push("Done");
    await alert(log.join("\n"));
    return true;
  })();
}

/***/ }),

/***/ "./build.definitions/RioMDKPOC/Rules/User/GetFirstName.js":
/*!****************************************************************!*\
  !*** ./build.definitions/RioMDKPOC/Rules/User/GetFirstName.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GetFirstName)
/* harmony export */ });
function GetFirstName(clientAPI) {
  const app = clientAPI.getAppClientData();
  return app && typeof app.FirstName === 'string' ? app.FirstName : '';
}

/***/ }),

/***/ "./build.definitions/RioMDKPOC/Rules/User/GetLastName.js":
/*!***************************************************************!*\
  !*** ./build.definitions/RioMDKPOC/Rules/User/GetLastName.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GetLastName)
/* harmony export */ });
function GetLastName(clientAPI) {
  const app = clientAPI.getAppClientData();
  return app && typeof app.LastName === 'string' ? app.LastName : '';
}

/***/ }),

/***/ "./build.definitions/RioMDKPOC/Rules/User/SaveFirstName.js":
/*!*****************************************************************!*\
  !*** ./build.definitions/RioMDKPOC/Rules/User/SaveFirstName.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SaveFirstName)
/* harmony export */ });
function SaveFirstName(clientAPI) {
  const page = clientAPI.getPageProxy();
  const val = page.getControl('SectionedTable_Main').getSection('UserInfoSection').getControl('FirstNameInput').getValue();
  clientAPI.getAppClientData().FirstName = (val ?? '').toString();
  return true;
}

/***/ }),

/***/ "./build.definitions/RioMDKPOC/Rules/User/SaveLastName.js":
/*!****************************************************************!*\
  !*** ./build.definitions/RioMDKPOC/Rules/User/SaveLastName.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SaveLastName)
/* harmony export */ });
function SaveLastName(clientAPI) {
  const page = clientAPI.getPageProxy();
  const val = page.getControl('SectionedTable_Main').getSection('UserInfoSection').getControl('LastNameInput').getValue();
  clientAPI.getAppClientData().LastName = (val ?? '').toString();
  return true;
}

/***/ }),

/***/ "./build.definitions/RioMDKPOC/Rules/Vis/IsBool.js":
/*!*********************************************************!*\
  !*** ./build.definitions/RioMDKPOC/Rules/Vis/IsBool.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ IsBool)
/* harmony export */ });
function IsBool(clientAPI) {
  try {
    const b = clientAPI.getBindingObject?.() || clientAPI.getPageProxy?.().binding || {};
    const t = Number(b.type_code);
    return t === 2; // Yes/No
  } catch (e) {
    return false;
  }
}

/***/ }),

/***/ "./build.definitions/RioMDKPOC/Rules/Vis/IsText.js":
/*!*********************************************************!*\
  !*** ./build.definitions/RioMDKPOC/Rules/Vis/IsText.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ IsText)
/* harmony export */ });
function IsText(clientAPI) {
  try {
    const b = clientAPI.getBindingObject?.() || clientAPI.getPageProxy?.().binding || {};
    const t = Number(b.type_code);
    return t === 1; // Text
  } catch (e) {
    return false;
  }
}

/***/ }),

/***/ "./build.definitions/RioMDKPOC/Styles/Styles.css":
/*!*******************************************************!*\
  !*** ./build.definitions/RioMDKPOC/Styles/Styles.css ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../../css-loader/dist/runtime/sourceMaps.js */ "../../../../css-loader/dist/runtime/sourceMaps.js");
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../css-loader/dist/runtime/api.js */ "../../../../css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* ===== Rio Tinto red/white theme (safe MDK props) ===== */
/* App baseline */
div.MDKPage {
  background-color: #FFFFFF;
  color: #1A1A1A;
}
/* Action Bar */
ui5-mdk-bar.actionbar {
  background-color: #E10600;
  color: #FFFFFF;
}
ui5-mdk-bar.actionbar Title {
  color: #FFFFFF;
}
ui5-mdk-bar.actionbar Icon {
  color: #FFFFFF;
}
/* Buttons */
Button {
  background-color: #E10600;
  color: #FFFFFF;
  border-radius: 10;
}
/* Form cells (labels/values) */
FormCell Label {
  color: #1A1A1A;
}
FormCell Value {
  color: #1A1A1A;
}
ObjectCell Title {
  color: #1A1A1A;
}
ObjectCell Status {
  color: #E10600;
}
/* Search bar: use color only (safe) */
SearchBar {
  color: #E10600;
}
`, "",{"version":3,"sources":["webpack://./build.definitions/RioMDKPOC/Styles/Styles.css"],"names":[],"mappings":"AAAA,2DAA2D;AAC3D,iBAAiB;AACjB;EACE,yBAAyB;EACzB,cAAc;AAChB;AACA,eAAe;AACf;EACE,yBAAyB;EACzB,cAAc;AAChB;AACA;EACE,cAAc;AAChB;AACA;EACE,cAAc;AAChB;AACA,YAAY;AACZ;EACE,yBAAyB;EACzB,cAAc;EACd,iBAAiB;AACnB;AACA,+BAA+B;AAC/B;EACE,cAAc;AAChB;AACA;EACE,cAAc;AAChB;AACA;EACE,cAAc;AAChB;AACA;EACE,cAAc;AAChB;AACA,sCAAsC;AACtC;EACE,cAAc;AAChB","sourcesContent":["/* ===== Rio Tinto red/white theme (safe MDK props) ===== */\n/* App baseline */\ndiv.MDKPage {\n  background-color: #FFFFFF;\n  color: #1A1A1A;\n}\n/* Action Bar */\nui5-mdk-bar.actionbar {\n  background-color: #E10600;\n  color: #FFFFFF;\n}\nui5-mdk-bar.actionbar Title {\n  color: #FFFFFF;\n}\nui5-mdk-bar.actionbar Icon {\n  color: #FFFFFF;\n}\n/* Buttons */\nButton {\n  background-color: #E10600;\n  color: #FFFFFF;\n  border-radius: 10;\n}\n/* Form cells (labels/values) */\nFormCell Label {\n  color: #1A1A1A;\n}\nFormCell Value {\n  color: #1A1A1A;\n}\nObjectCell Title {\n  color: #1A1A1A;\n}\nObjectCell Status {\n  color: #E10600;\n}\n/* Search bar: use color only (safe) */\nSearchBar {\n  color: #E10600;\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./build.definitions/RioMDKPOC/Styles/Styles.less":
/*!********************************************************!*\
  !*** ./build.definitions/RioMDKPOC/Styles/Styles.less ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../../css-loader/dist/runtime/sourceMaps.js */ "../../../../css-loader/dist/runtime/sourceMaps.js");
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../css-loader/dist/runtime/api.js */ "../../../../css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* ===== Rio Tinto red/white theme (safe MDK props) ===== */
@rioRed:  #E10600;
@rioText: #1A1A1A;
@white:   #FFFFFF;

/* App baseline */
Page {
  background-color: @white;
  color: @rioText;
}

/* Action Bar */
ActionBar {
  background-color: @rioRed;
  color: @white;
}
ActionBar Title {
  color: @white;
}
ActionBar Icon {
  color: @white;
}

/* Buttons */
Button {
  background-color: @rioRed;
  color: @white;
  border-radius: 10;
}

/* Form cells (labels/values) */
FormCell Label {
  color: @rioText;
}
FormCell Value {
  color: @rioText;
}

ObjectCell Title {
  color: @rioText;
}
ObjectCell Status {
  color: @rioRed;
}

/* Search bar: use color only (safe) */
SearchBar {
  color: @rioRed;
}
`, "",{"version":3,"sources":["webpack://./build.definitions/RioMDKPOC/Styles/Styles.less"],"names":[],"mappings":"AAAA,2DAA2D;AAC3D,iBAAiB;AACjB,iBAAiB;AACjB,iBAAiB;;AAEjB,iBAAiB;AACjB;EACE,wBAAwB;EACxB,eAAe;AACjB;;AAEA,eAAe;AACf;EACE,yBAAyB;EACzB,aAAa;AACf;AACA;EACE,aAAa;AACf;AACA;EACE,aAAa;AACf;;AAEA,YAAY;AACZ;EACE,yBAAyB;EACzB,aAAa;EACb,iBAAiB;AACnB;;AAEA,+BAA+B;AAC/B;EACE,eAAe;AACjB;AACA;EACE,eAAe;AACjB;;AAEA;EACE,eAAe;AACjB;AACA;EACE,cAAc;AAChB;;AAEA,sCAAsC;AACtC;EACE,cAAc;AAChB","sourcesContent":["/* ===== Rio Tinto red/white theme (safe MDK props) ===== */\n@rioRed:  #E10600;\n@rioText: #1A1A1A;\n@white:   #FFFFFF;\n\n/* App baseline */\nPage {\n  background-color: @white;\n  color: @rioText;\n}\n\n/* Action Bar */\nActionBar {\n  background-color: @rioRed;\n  color: @white;\n}\nActionBar Title {\n  color: @white;\n}\nActionBar Icon {\n  color: @white;\n}\n\n/* Buttons */\nButton {\n  background-color: @rioRed;\n  color: @white;\n  border-radius: 10;\n}\n\n/* Form cells (labels/values) */\nFormCell Label {\n  color: @rioText;\n}\nFormCell Value {\n  color: @rioText;\n}\n\nObjectCell Title {\n  color: @rioText;\n}\nObjectCell Status {\n  color: @rioRed;\n}\n\n/* Search bar: use color only (safe) */\nSearchBar {\n  color: @rioRed;\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./build.definitions/RioMDKPOC/Styles/Styles.nss":
/*!*******************************************************!*\
  !*** ./build.definitions/RioMDKPOC/Styles/Styles.nss ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../../css-loader/dist/runtime/sourceMaps.js */ "../../../../css-loader/dist/runtime/sourceMaps.js");
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../css-loader/dist/runtime/api.js */ "../../../../css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@rioRed: #E10600;
@rioText: #1A1A1A;
@white: #FFFFFF;
ActionBar {
	background-color: #E10600;
	font-color: #FFFFFF;
}
`, "",{"version":3,"sources":["webpack://./build.definitions/RioMDKPOC/Styles/Styles.nss"],"names":[],"mappings":"AAAA,gBAAgB;AAChB,iBAAiB;AACjB,eAAe;AACf;CACC,yBAAyB;CACzB,mBAAmB;AACpB","sourcesContent":["@rioRed: #E10600;\n@rioText: #1A1A1A;\n@white: #FFFFFF;\nActionBar {\n\tbackground-color: #E10600;\n\tfont-color: #FFFFFF;\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "../../../../css-loader/dist/runtime/api.js":
/*!**************************************************!*\
  !*** ../../../../css-loader/dist/runtime/api.js ***!
  \**************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "../../../../css-loader/dist/runtime/sourceMaps.js":
/*!*********************************************************!*\
  !*** ../../../../css-loader/dist/runtime/sourceMaps.js ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./build.definitions/RioMDKPOC/Pages/Application/About.page":
/*!******************************************************************!*\
  !*** ./build.definitions/RioMDKPOC/Pages/Application/About.page ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"KeyAndValues":[{"_Name":"KeyValue0","KeyName":"User ID","Value":"#Application/#AppData/UserId","Visible":true,"_Type":"KeyValue.Type.Item"},{"Value":"#Application/#AppData/DeviceId","_Name":"KeyValue1","KeyName":"Device ID","Visible":true,"_Type":"KeyValue.Type.Item"},{"Value":"/RioMDKPOC/Globals/Application/ApplicationName.global","_Name":"KeyValue2","KeyName":"Application","Visible":true,"_Type":"KeyValue.Type.Item"},{"Value":"/RioMDKPOC/Globals/Application/AppDefinition_Version.global","_Name":"KeyValue3","KeyName":"Application Metadata Version","Visible":true,"_Type":"KeyValue.Type.Item"}],"MaxItemCount":1,"_Type":"Section.Type.KeyValue","_Name":"SectionKeyValue0","Visible":true,"EmptySection":{"FooterVisible":false},"Layout":{"NumberOfColumns":1}},{"KeyAndValues":[{"Value":"/RioMDKPOC/Rules/Application/GetClientVersion.js","_Name":"KeyValue4","KeyName":"Client Version","Visible":"$(PLT,true,true,false)","_Type":"KeyValue.Type.Item"},{"Value":"/RioMDKPOC/Rules/Application/GetClientSupportVersions.js","_Name":"KeyValue5","KeyName":"Client Support Versions","Visible":true,"_Type":"KeyValue.Type.Item"}],"MaxItemCount":1,"_Type":"Section.Type.KeyValue","_Name":"SectionKeyValue1","Visible":true,"EmptySection":{"FooterVisible":false},"Layout":{"NumberOfColumns":1}}]}],"_Type":"Page","_Name":"About","ActionBar":{"Items":[{"_Name":"ActionBarItem0","Caption":"Done","SystemItem":"Done","Position":"Right","IsIconCircular":false,"Visible":true,"OnPress":"/RioMDKPOC/Actions/CloseModalPage_Complete.action","_Type":"Control.Type.ActionBarItem"}],"_Name":"ActionBar1","Caption":"About","PrefersLargeCaption":true,"_Type":"Control.Type.ActionBar"}}

/***/ }),

/***/ "./build.definitions/RioMDKPOC/Pages/Application/Support.page":
/*!********************************************************************!*\
  !*** ./build.definitions/RioMDKPOC/Pages/Application/Support.page ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"FilterFeedbackBar":{"ShowAllFilters":true,"_Type":"Control.Type.FilterFeedbackBar"},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"_Type":"Section.Type.ContactCell","_Name":"SectionContactCellTable1","EmptySection":{"FooterVisible":false},"ContactCells":[{"ContactCell":{"_Name":"ContactCellItem0","Headline":"Contact Support","ActivityItems":[{"ActivityType":"Phone","ActivityValue":"/RioMDKPOC/Globals/Application/SupportPhone.global"},{"ActivityType":"Email","ActivityValue":"/RioMDKPOC/Globals/Application/SupportEmail.global"},{"ActivityType":"Message","ActivityValue":"/RioMDKPOC/Globals/Application/SupportPhone.global"}]}}]},{"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":false,"FooterSeparator":true,"ControlSeparator":true},"_Type":"Section.Type.SimplePropertyCollection","_Name":"SectionSimplePropertyCollection0","Visible":"$(PLT,true,true,false)","EmptySection":{"FooterVisible":false},"SimplePropertyCells":[{"SimplePropertyCell":{"_Name":"SectionSimplePropertyCell0","KeyName":"Activity Log","AccessoryType":"DisclosureIndicator","Visible":"$(PLT,true,true,false)","OnPress":"/RioMDKPOC/Actions/Application/NavToActivityLog.action","_Type":"SimplePropertyCollection.Type.Cell"}}],"Layout":{"NumberOfColumns":1,"MinimumInteritemSpacing":66}}]}],"_Type":"Page","_Name":"Settings","ActionBar":{"Items":[{"_Name":"ActionBarItem0","Caption":"Done","SystemItem":"Done","Position":"Right","IsIconCircular":false,"Visible":true,"OnPress":"/RioMDKPOC/Actions/CloseModalPage_Complete.action","_Type":"Control.Type.ActionBarItem"}],"_Name":"ActionBar1","Caption":"Settings","PrefersLargeCaption":false,"_Type":"Control.Type.ActionBar"}}

/***/ }),

/***/ "./build.definitions/RioMDKPOC/Pages/Application/UserActivityLog.page":
/*!****************************************************************************!*\
  !*** ./build.definitions/RioMDKPOC/Pages/Application/UserActivityLog.page ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"FilterFeedbackBar":{"ShowAllFilters":true,"_Type":"Control.Type.FilterFeedbackBar"},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable","Sections":[{"Controls":[{"Value":false,"_Type":"Control.Type.FormCell.Switch","_Name":"EnableLogSwitch","IsVisible":true,"Separator":true,"Caption":"Enable Logging","OnValueChange":"/RioMDKPOC/Rules/Logging/ToggleLogging.js","IsEditable":true},{"IsSearchEnabled":false,"_Type":"Control.Type.FormCell.ListPicker","_Name":"LogLevelListPicker","IsVisible":true,"Separator":true,"AllowMultipleSelection":false,"AllowEmptySelection":false,"Caption":"Log Level","OnValueChange":"/RioMDKPOC/Rules/Logging/SetUserLogLevel.js","IsSelectedSectionEnabled":false,"IsPickerDismissedOnSelection":true,"AllowDefaultValueIfOneItem":false,"IsEditable":false,"PickerItems":"/RioMDKPOC/Rules/Logging/LogLevels.js"},{"_Type":"Control.Type.FormCell.ListPicker","_Name":"TracingCategoriesListPicker","IsVisible":false,"Separator":true,"AllowMultipleSelection":true,"AllowEmptySelection":true,"Caption":"Tracing Categories","PickerPrompt":"Select Categories for Tracing","OnValueChange":"/RioMDKPOC/Rules/Logging/SetTraceCategories.js","IsSelectedSectionEnabled":true,"IsPickerDismissedOnSelection":false,"IsSearchCancelledAfterSelection":false,"AllowDefaultValueIfOneItem":false,"IsEditable":true,"PickerItems":"/RioMDKPOC/Rules/Logging/TraceCategories.js"},{"Value":false,"_Type":"Control.Type.FormCell.Switch","_Name":"odataTrace","IsVisible":false,"Separator":true,"Caption":"OData Tracing","OnValueChange":"/RioMDKPOC/Rules/Logging/SetTraceCategories.js","IsEditable":true}],"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"Visible":true,"EmptySection":{"FooterVisible":false},"_Type":"Section.Type.FormCell","_Name":"FormCellSection0"},{"Controls":[{"_Type":"Control.Type.FormCell.Button","_Name":"Send","IsVisible":true,"Separator":true,"Title":"Send Activity Log","Alignment":"Center","ButtonType":"Text","Semantic":"Tint","ImagePosition":"Leading","Enabled":true,"OnPress":"/RioMDKPOC/Actions/Logging/UploadLogProgress.action"}],"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"Visible":true,"EmptySection":{"FooterVisible":false},"_Type":"Section.Type.FormCell","_Name":"FormCellSection1"}]}],"_Type":"Page","_Name":"UserActivityLog","ActionBar":{"Caption":"Activity Log","PrefersLargeCaption":false,"_Type":"Control.Type.ActionBar"},"OnLoaded":"/RioMDKPOC/Rules/Logging/UserLogSetting.js"}

/***/ }),

/***/ "./build.definitions/RioMDKPOC/Pages/ErrorArchive/ErrorArchive_Detail.page":
/*!*********************************************************************************!*\
  !*** ./build.definitions/RioMDKPOC/Pages/ErrorArchive/ErrorArchive_Detail.page ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable","Sections":[{"KeyAndValues":[{"Value":"{Message}","_Name":"KeyValue0","KeyName":"Error","Visible":true,"_Type":"KeyValue.Type.Item"},{"Value":"{RequestBody}","_Name":"KeyValue1","KeyName":"Request Body","Visible":true,"_Type":"KeyValue.Type.Item"},{"Value":"{RequestURL}","_Name":"KeyValue2","KeyName":"Request URL","Visible":true,"_Type":"KeyValue.Type.Item"},{"Value":"{HTTPStatusCode}","_Name":"KeyValue3","KeyName":"HTTP Status Code","Visible":true,"_Type":"KeyValue.Type.Item"},{"Value":"{RequestMethod}","_Name":"KeyValue4","KeyName":"Request Method","Visible":true,"_Type":"KeyValue.Type.Item"}],"MaxItemCount":1,"_Type":"Section.Type.KeyValue","_Name":"SectionKeyValue0","Visible":true,"EmptySection":{"FooterVisible":false},"Layout":{"NumberOfColumns":1}}]}],"_Type":"Page","_Name":"ErrorArchive_Detail","ActionBar":{"Caption":"Details","PrefersLargeCaption":true,"_Type":"Control.Type.ActionBar"}}

/***/ }),

/***/ "./build.definitions/RioMDKPOC/Pages/ErrorArchive/ErrorArchive_List.page":
/*!*******************************************************************************!*\
  !*** ./build.definitions/RioMDKPOC/Pages/ErrorArchive/ErrorArchive_List.page ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"_Type":"Section.Type.ObjectTable","Target":{"Service":"/RioMDKPOC/Services/RioFormsMDK.service","EntitySet":"ErrorArchive"},"_Name":"SectionObjectTable0","Visible":true,"EmptySection":{"FooterVisible":false,"Caption":"No record found!"},"ObjectCell":{"ContextMenu":{"Items":[],"PerformFirstActionWithFullSwipe":true,"_Type":"ObjectCell.Type.ContextMenu"},"Title":"{HTTPStatusCode}","Subhead":"{RequestURL}","Footnote":"{Message}","StatusText":"{RequestMethod}","AvatarStack":{"ImageIsCircular":false},"PreserveIconStackSpacing":false,"AccessoryType":"None","OnPress":"/RioMDKPOC/Actions/ErrorArchive/NavToErrorArchive_Detail.action","Selected":false,"_Type":"ObjectTable.Type.ObjectCell"},"DataPaging":{"ShowLoadingIndicator":false,"PageSize":50},"HighlightSelectedItem":false,"Selection":{"ExitOnLastDeselect":true,"LongPressToEnable":"None","Mode":"None"}}]}],"_Type":"Page","_Name":"ErrorArchive_List","ActionBar":{"Caption":"Error List","PrefersLargeCaption":true,"_Type":"Control.Type.ActionBar"}}

/***/ }),

/***/ "./build.definitions/RioMDKPOC/Pages/FormDetail.page":
/*!***********************************************************!*\
  !*** ./build.definitions/RioMDKPOC/Pages/FormDetail.page ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Page","_Name":"FormDetail","OnLoaded":"/RioMDKPOC/Rules/OnFormDetailLoaded.js","Controls":[{"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"_Type":"Section.Type.FormCell","_Name":"RespondentInfo","Header":{"Caption":"Respondent"},"Controls":[{"_Type":"Control.Type.FormCell.SimpleProperty","_Name":"FirstNameInput","Caption":"First name","IsEditable":true,"Value":""},{"_Type":"Control.Type.FormCell.SimpleProperty","_Name":"LastNameInput","Caption":"Last name","IsEditable":true,"Value":""}]},{"_Type":"Section.Type.KeyValue","_Name":"FormHeader","Header":{"Caption":"Form"},"Target":{"Service":"/RioMDKPOC/Services/RioFormsMDK.service","EntitySet":"Form","ReadLink":"Form({{#Property:ID}})"},"KeyAndValues":[{"KeyName":"Name","Value":"{formName}"},{"KeyName":"Description","Value":"{formDescription}"},{"KeyName":"Active","Value":"{active}"}]}],"Target":{"Service":"/RioMDKPOC/Services/RioFormsMDK.service","EntitySet":"Questions","QueryOptions":"$filter=form_ID eq guid'{{#Property:ID}}' and (type_code eq 1 or type_code eq 2)&$orderby=type_code,ID"},"Section":{"_Type":"Section.Type.FormCell","_Name":"QuestionSectionTemplate","Header":{"Caption":"{question}"},"Controls":[{"_Type":"Control.Type.FormCell.SimpleProperty","_Name":"Q_Text","Caption":"Answer","IsEditable":true,"Value":"","IsVisible":"/RioMDKPOC/Rules/Vis/IsText.js"},{"_Type":"Control.Type.FormCell.Switch","_Name":"Q_Bool","Caption":"Yes / No","Value":false,"IsVisible":"/RioMDKPOC/Rules/Vis/IsBool.js"}]}}],"ActionBar":{"_Type":"Control.Type.ActionBar","_Name":"ActionBar_FormDetail","Items":[{"_Type":"Control.Type.ActionBarItem","_Name":"SubmitAnswersItem","Text":"Submit","Position":"Right","OnPress":"/RioMDKPOC/Rules/Submit_EntryPoint.js"},{"_Type":"Control.Type.ActionBarItem","_Name":"SyncBtn","Text":"Sync","Position":"Left","OnPress":"/RioMDKPOC/Rules/Sync_UploadThenDownload.js"}]}}

/***/ }),

/***/ "./build.definitions/RioMDKPOC/Pages/Main.page":
/*!*****************************************************!*\
  !*** ./build.definitions/RioMDKPOC/Pages/Main.page ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"FilterFeedbackBar":{"ShowAllFilters":false,"_Type":"Control.Type.FilterFeedbackBar"},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable_Main","Sections":[{"Controls":[{"Value":"Checking…","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"NetStatus","RequiredIndicator":false,"IsVisible":"$(PLT,true,true,false)","Separator":true,"Caption":"Status","Enabled":true,"IsEditable":false}],"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"Visible":true,"EmptySection":{"FooterVisible":false},"_Type":"Section.Type.FormCell","_Name":"StatusSection"},{"Controls":[{"Value":"/RioMDKPOC/Rules/User/GetFirstName.js","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"FirstNameInput","RequiredIndicator":false,"IsVisible":true,"Separator":true,"Caption":"First name","OnValueChange":"/RioMDKPOC/Rules/User/SaveFirstName.js","Enabled":true,"IsEditable":true},{"Value":"/RioMDKPOC/Rules/User/GetLastName.js","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"LastNameInput","RequiredIndicator":false,"IsVisible":true,"Separator":true,"Caption":"Last name","OnValueChange":"/RioMDKPOC/Rules/User/SaveLastName.js","Enabled":true,"IsEditable":true}],"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"Header":{"_Type":"SectionCommon.Type.Header","_Name":"SectionCommonTypeHeader1","AccessoryType":"None","UseTopPadding":true,"Caption":"Your details"},"Visible":true,"EmptySection":{"FooterVisible":false},"_Type":"Section.Type.FormCell","_Name":"UserInfoSection"},{"_Type":"Section.Type.ContactCell","Target":{"Service":"/RioMDKPOC/Services/RioFormsMDK.service","EntitySet":"Form","QueryOptions":"$filter=active eq true&$orderby=formName"},"_Name":"FormsList","EmptySection":{"FooterVisible":false},"ContactCell":{"DetailImage":"res://contact.png","Headline":"{formName}","Subheadline":"{formDescription}","Description":"description","OnPress":"/RioMDKPOC/Actions/NavToFormDetail.action","ContextMenu":{"PerformFirstActionWithFullSwipe":true}}}]}],"_Type":"Page","_Name":"Main","OnLoaded":"/RioMDKPOC/Rules/Main/Main_OnLoaded.js","OnUnloaded":"/RioMDKPOC/Rules/Main/Main_OnUnloaded.js","OnReturning":"/RioMDKPOC/Rules/Main/Main_OnReturning.js","ActionBar":{"Items":[{"Text":"Sync","_Type":"Control.Type.ActionBarItem","_Name":"SyncBtn","Caption":"","Position":"Right","IsIconCircular":false,"Visible":"$(PLT,true,true,false)","OnPress":"/RioMDKPOC/Rules/Sync/Sync_UploadThenDownload.js"},{"_Type":"Control.Type.ActionBarItem","_Name":"UserMenu","Caption":"User Menu","Icon":"sap-icon://customer","Position":"Right","IsIconCircular":false,"Visible":true,"OnPress":"/RioMDKPOC/Actions/Application/UserMenuPopover.action"}],"_Name":"ActionBar_Main","_Type":"Control.Type.ActionBar","Caption":"Forms"}}

/***/ }),

/***/ "./build.definitions/Application.app":
/*!*******************************************!*\
  !*** ./build.definitions/Application.app ***!
  \*******************************************/
/***/ ((module) => {

module.exports = {"_Name":"RioMDKPOC","Version":"/RioMDKPOC/Globals/Application/AppDefinition_Version.global","MainPage":"/RioMDKPOC/Pages/Main.page","OnLaunch":["$(PLT,/RioMDKPOC/Rules/Service/Initialize.js,/RioMDKPOC/Rules/Service/Initialize.js,/RioMDKPOC/Actions/RioFormsMDK/Service/InitializeOnlineWeb.action)"],"OnWillUpdate":"/RioMDKPOC/Rules/Application/OnWillUpdate.js","OnDidUpdate":"/RioMDKPOC/Rules/Service/Initialize.js","Styles":"/RioMDKPOC/Styles/Styles.less","Localization":"/RioMDKPOC/i18n/i18n.properties","_SchemaVersion":"25.9","StyleSheets":{"Styles":{"css":"/RioMDKPOC/Styles/Styles.css","ios":"/RioMDKPOC/Styles/Styles.nss","android":"/RioMDKPOC/Styles/Styles.json"}}}

/***/ }),

/***/ "./build.definitions/RioMDKPOC/Actions/Application/AppUpdate.action":
/*!**************************************************************************!*\
  !*** ./build.definitions/RioMDKPOC/Actions/Application/AppUpdate.action ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ApplicationUpdate","ActionResult":{"_Name":"AppUpdate"},"OnFailure":"/RioMDKPOC/Rules/Application/AppUpdateFailure.js","OnSuccess":"/RioMDKPOC/Rules/Application/AppUpdateSuccess.js"}

/***/ }),

/***/ "./build.definitions/RioMDKPOC/Actions/Application/AppUpdateFailureMessage.action":
/*!****************************************************************************************!*\
  !*** ./build.definitions/RioMDKPOC/Actions/Application/AppUpdateFailureMessage.action ***!
  \****************************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Failed to update application - {#ActionResults:AppUpdate/error}","Duration":7,"Animated":true,"_Type":"Action.Type.BannerMessage"}

/***/ }),

/***/ "./build.definitions/RioMDKPOC/Actions/Application/AppUpdateProgressBanner.action":
/*!****************************************************************************************!*\
  !*** ./build.definitions/RioMDKPOC/Actions/Application/AppUpdateProgressBanner.action ***!
  \****************************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"CompletionTimeout":3,"Message":"Checking for Updates...","OnSuccess":"/RioMDKPOC/Actions/Application/AppUpdate.action","_Type":"Action.Type.ProgressBanner"}

/***/ }),

/***/ "./build.definitions/RioMDKPOC/Actions/Application/AppUpdateSuccessMessage.action":
/*!****************************************************************************************!*\
  !*** ./build.definitions/RioMDKPOC/Actions/Application/AppUpdateSuccessMessage.action ***!
  \****************************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"Duration":2,"Message":"Update application complete","_Type":"Action.Type.ToastMessage"}

/***/ }),

/***/ "./build.definitions/RioMDKPOC/Actions/Application/Logout.action":
/*!***********************************************************************!*\
  !*** ./build.definitions/RioMDKPOC/Actions/Application/Logout.action ***!
  \***********************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Logout","SkipReset":true}

/***/ }),

/***/ "./build.definitions/RioMDKPOC/Actions/Application/NavToAbout.action":
/*!***************************************************************************!*\
  !*** ./build.definitions/RioMDKPOC/Actions/Application/NavToAbout.action ***!
  \***************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPage":true,"PageToOpen":"/RioMDKPOC/Pages/Application/About.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/RioMDKPOC/Actions/Application/NavToActivityLog.action":
/*!*********************************************************************************!*\
  !*** ./build.definitions/RioMDKPOC/Actions/Application/NavToActivityLog.action ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPage":true,"PageToOpen":"/RioMDKPOC/Pages/Application/UserActivityLog.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/RioMDKPOC/Actions/Application/NavToSupport.action":
/*!*****************************************************************************!*\
  !*** ./build.definitions/RioMDKPOC/Actions/Application/NavToSupport.action ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPage":true,"NavigationType":"Cross","PageToOpen":"/RioMDKPOC/Pages/Application/Support.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/RioMDKPOC/Actions/Application/OnWillUpdate.action":
/*!*****************************************************************************!*\
  !*** ./build.definitions/RioMDKPOC/Actions/Application/OnWillUpdate.action ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Message","Message":"A new version of the application is now ready to apply. Do you want to update to this version?","Title":"New Version Available!","OKCaption":"Now","CancelCaption":"Later","ActionResult":{"_Name":"OnWillUpdate"}}

/***/ }),

/***/ "./build.definitions/RioMDKPOC/Actions/Application/Reset.action":
/*!**********************************************************************!*\
  !*** ./build.definitions/RioMDKPOC/Actions/Application/Reset.action ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Logout","SkipReset":false}

/***/ }),

/***/ "./build.definitions/RioMDKPOC/Actions/Application/ResetMessage.action":
/*!*****************************************************************************!*\
  !*** ./build.definitions/RioMDKPOC/Actions/Application/ResetMessage.action ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Message","Message":"This action will remove all data and return to the Welcome screen. Any local data will be lost. Are you sure you want to continue?","Title":"Reset","OKCaption":"Yes","OnOK":"/RioMDKPOC/Rules/Application/ResetAppSettingsAndLogout.js","CancelCaption":"No"}

/***/ }),

/***/ "./build.definitions/RioMDKPOC/Actions/Application/UserMenuPopover.action":
/*!********************************************************************************!*\
  !*** ./build.definitions/RioMDKPOC/Actions/Application/UserMenuPopover.action ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = {"PopoverItems":[{"Enabled":true,"Icon":"sap-icon://synchronize","OnPress":"/RioMDKPOC/Actions/RioFormsMDK/Service/SyncStartedMessage.action","Title":"Sync Changes","Visible":"$(PLT,true,true,false)"},{"Enabled":true,"Icon":"sap-icon://headset","OnPress":"/RioMDKPOC/Actions/Application/NavToSupport.action","Title":"Support","Visible":true},{"Enabled":true,"Icon":"sap-icon://refresh","OnPress":"/RioMDKPOC/Actions/Application/AppUpdateProgressBanner.action","Title":"Check for Updates","Visible":"$(PLT,true,true,false)"},{"Enabled":true,"Icon":"sap-icon://hint","OnPress":"/RioMDKPOC/Actions/Application/NavToAbout.action","Title":"About","Visible":true},{"Enabled":true,"Icon":"sap-icon://reset","OnPress":"/RioMDKPOC/Actions/Application/ResetMessage.action","Title":"Reset","Visible":true},{"Enabled":true,"Icon":"sap-icon://log","OnPress":"/RioMDKPOC/Actions/Application/Logout.action","Title":"Logout","Visible":"/RioMDKPOC/Rules/Application/ClientIsMultiUserMode.js"}],"_Type":"Action.Type.PopoverMenu"}

/***/ }),

/***/ "./build.definitions/RioMDKPOC/Actions/CloseModalPage_Cancel.action":
/*!**************************************************************************!*\
  !*** ./build.definitions/RioMDKPOC/Actions/CloseModalPage_Cancel.action ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = {"DismissModal":"Action.Type.ClosePage.Canceled","CancelPendingActions":true,"_Type":"Action.Type.ClosePage"}

/***/ }),

/***/ "./build.definitions/RioMDKPOC/Actions/CloseModalPage_Complete.action":
/*!****************************************************************************!*\
  !*** ./build.definitions/RioMDKPOC/Actions/CloseModalPage_Complete.action ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = {"DismissModal":"Action.Type.ClosePage.Completed","CancelPendingActions":false,"_Type":"Action.Type.ClosePage"}

/***/ }),

/***/ "./build.definitions/RioMDKPOC/Actions/ClosePage.action":
/*!**************************************************************!*\
  !*** ./build.definitions/RioMDKPOC/Actions/ClosePage.action ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ClosePage"}

/***/ }),

/***/ "./build.definitions/RioMDKPOC/Actions/ErrorArchive/ErrorArchive_SyncFailure.action":
/*!******************************************************************************************!*\
  !*** ./build.definitions/RioMDKPOC/Actions/ErrorArchive/ErrorArchive_SyncFailure.action ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.BannerMessage","Message":"Upload failed!","Duration":0,"Animated":false,"OnActionLabelPress":"/RioMDKPOC/Actions/ErrorArchive/NavToErrorArchive_List.action","ActionLabel":"View Errors"}

/***/ }),

/***/ "./build.definitions/RioMDKPOC/Actions/ErrorArchive/NavToErrorArchive_Detail.action":
/*!******************************************************************************************!*\
  !*** ./build.definitions/RioMDKPOC/Actions/ErrorArchive/NavToErrorArchive_Detail.action ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/RioMDKPOC/Pages/ErrorArchive/ErrorArchive_Detail.page","NavigationType":"Inner"}

/***/ }),

/***/ "./build.definitions/RioMDKPOC/Actions/ErrorArchive/NavToErrorArchive_List.action":
/*!****************************************************************************************!*\
  !*** ./build.definitions/RioMDKPOC/Actions/ErrorArchive/NavToErrorArchive_List.action ***!
  \****************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/RioMDKPOC/Pages/ErrorArchive/ErrorArchive_List.page","NavigationType":"Inner"}

/***/ }),

/***/ "./build.definitions/RioMDKPOC/Actions/GenericBannerMessage.action":
/*!*************************************************************************!*\
  !*** ./build.definitions/RioMDKPOC/Actions/GenericBannerMessage.action ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.BannerMessage","ActionResult":{"_Name":"GenericBannerMessage"},"Message":"Message"}

/***/ }),

/***/ "./build.definitions/RioMDKPOC/Actions/GenericMessageBox.action":
/*!**********************************************************************!*\
  !*** ./build.definitions/RioMDKPOC/Actions/GenericMessageBox.action ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Message","ActionResult":{"_Name":"GenericMessageBox"},"Message":"Message","OKCaption":"OK"}

/***/ }),

/***/ "./build.definitions/RioMDKPOC/Actions/GenericNavigation.action":
/*!**********************************************************************!*\
  !*** ./build.definitions/RioMDKPOC/Actions/GenericNavigation.action ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","ActionResult":{"_Name":"GenericNavigation"},"PageToOpen":"/RioMDKPOC/Pages/Main.page"}

/***/ }),

/***/ "./build.definitions/RioMDKPOC/Actions/GenericToastMessage.action":
/*!************************************************************************!*\
  !*** ./build.definitions/RioMDKPOC/Actions/GenericToastMessage.action ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ToastMessage","ActionResult":{"_Name":"GenericToastMessage"},"Message":"Message"}

/***/ }),

/***/ "./build.definitions/RioMDKPOC/Actions/Logging/LogUploadFailure.action":
/*!*****************************************************************************!*\
  !*** ./build.definitions/RioMDKPOC/Actions/Logging/LogUploadFailure.action ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Uploading log file failed with error: {#ActionResults:UploadLog/error}","OKCaption":"OK","Title":"Log Upload Failed","_Type":"Action.Type.Message"}

/***/ }),

/***/ "./build.definitions/RioMDKPOC/Actions/Logging/LogUploadSuccessful.action":
/*!********************************************************************************!*\
  !*** ./build.definitions/RioMDKPOC/Actions/Logging/LogUploadSuccessful.action ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"Duration":3,"IsIconHidden":false,"MaxNumberOfLines":1,"Message":"Log File Uploaded","_Type":"Action.Type.ToastMessage"}

/***/ }),

/***/ "./build.definitions/RioMDKPOC/Actions/Logging/UploadLog.action":
/*!**********************************************************************!*\
  !*** ./build.definitions/RioMDKPOC/Actions/Logging/UploadLog.action ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = {"ActionResult":{"_Name":"UploadLog"},"ActivityIndicatorText":"Uploading...","OnFailure":"/RioMDKPOC/Actions/Logging/LogUploadFailure.action","OnSuccess":"/RioMDKPOC/Actions/Logging/LogUploadSuccessful.action","ShowActivityIndicator":false,"_Type":"Action.Type.Logger.Upload"}

/***/ }),

/***/ "./build.definitions/RioMDKPOC/Actions/Logging/UploadLogProgress.action":
/*!******************************************************************************!*\
  !*** ./build.definitions/RioMDKPOC/Actions/Logging/UploadLogProgress.action ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"CompletionMessage":"Logs Uploaded","CompletionTimeout":2,"Message":"Uploading Log Files...","OnSuccess":"/RioMDKPOC/Actions/Logging/UploadLog.action","_Type":"Action.Type.ProgressBanner"}

/***/ }),

/***/ "./build.definitions/RioMDKPOC/Actions/NavToFormDetail.action":
/*!********************************************************************!*\
  !*** ./build.definitions/RioMDKPOC/Actions/NavToFormDetail.action ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","_Name":"NavToFormDetail","PageToOpen":"/RioMDKPOC/Pages/FormDetail.page"}

/***/ }),

/***/ "./build.definitions/RioMDKPOC/Actions/Navigation/ClosePage.action":
/*!*************************************************************************!*\
  !*** ./build.definitions/RioMDKPOC/Actions/Navigation/ClosePage.action ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ClosePage","_Name":"ClosePage"}

/***/ }),

/***/ "./build.definitions/RioMDKPOC/Actions/ODATA/CreateAnswer_FromCD.action":
/*!******************************************************************************!*\
  !*** ./build.definitions/RioMDKPOC/Actions/ODATA/CreateAnswer_FromCD.action ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ODataService.CreateRelatedEntity","_Name":"CreateAnswer_FromCD","Target":{"Service":"/RioMDKPOC/Services/RioFormsMDK.service","EntitySet":"AnswerRecord"},"ParentLink":{"Property":"answerRecords","Target":{"Service":"/RioMDKPOC/Services/RioFormsMDK.service","EntitySet":"FormRecord","ReadLink":"pending_1"}},"Properties":{"question_ID":"/RioMDKPOC/Rules/ChildProps/GetQuestionID_FromCD.js","textAnswer":"/RioMDKPOC/Rules/ChildProps/GetText_FromCD.js","boolAnswer":"/RioMDKPOC/Rules/ChildProps/GetBool_FromCD.js"}}

/***/ }),

/***/ "./build.definitions/RioMDKPOC/Actions/ODATA/CreateFormRecord_Minimal.action":
/*!***********************************************************************************!*\
  !*** ./build.definitions/RioMDKPOC/Actions/ODATA/CreateFormRecord_Minimal.action ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ODataService.CreateEntity","_Name":"CreateFormRecord_Minimal","Target":{"Service":"/RioMDKPOC/Services/RioFormsMDK.service","EntitySet":"FormRecord"},"Properties":{"firstName":"/RioMDKPOC/Rules/User/GetFirstName.js","lastName":"/RioMDKPOC/Rules/User/GetLastName.js","form_ID":"{ID}"},"ActionResult":{"_Name":"CreateParent"}}

/***/ }),

/***/ "./build.definitions/RioMDKPOC/Actions/RioFormsMDK/Service/CloseOffline.action":
/*!*************************************************************************************!*\
  !*** ./build.definitions/RioMDKPOC/Actions/RioFormsMDK/Service/CloseOffline.action ***!
  \*************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.OfflineOData.Close","Service":"/RioMDKPOC/Services/RioFormsMDK.service","Force":true,"ActionResult":{"_Name":"close"},"OnSuccess":"/RioMDKPOC/Actions/RioFormsMDK/Service/CloseOfflineSuccessMessage.action","OnFailure":"/RioMDKPOC/Actions/RioFormsMDK/Service/CloseOfflineFailureMessage.action"}

/***/ }),

/***/ "./build.definitions/RioMDKPOC/Actions/RioFormsMDK/Service/CloseOfflineFailureMessage.action":
/*!***************************************************************************************************!*\
  !*** ./build.definitions/RioMDKPOC/Actions/RioFormsMDK/Service/CloseOfflineFailureMessage.action ***!
  \***************************************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Failure closing data service - {#ActionResults:close/error}","NumberOfLines":1,"Duration":3,"Animated":true,"IsIconHidden":true,"_Type":"Action.Type.ToastMessage"}

/***/ }),

/***/ "./build.definitions/RioMDKPOC/Actions/RioFormsMDK/Service/CloseOfflineSuccessMessage.action":
/*!***************************************************************************************************!*\
  !*** ./build.definitions/RioMDKPOC/Actions/RioFormsMDK/Service/CloseOfflineSuccessMessage.action ***!
  \***************************************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Data service closed successfully","NumberOfLines":1,"Duration":3,"Animated":true,"IsIconHidden":true,"_Type":"Action.Type.ToastMessage"}

/***/ }),

/***/ "./build.definitions/RioMDKPOC/Actions/RioFormsMDK/Service/DownloadAfterUpload.action":
/*!********************************************************************************************!*\
  !*** ./build.definitions/RioMDKPOC/Actions/RioFormsMDK/Service/DownloadAfterUpload.action ***!
  \********************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.OfflineOData.Download","_Name":"DownloadAfterUpload","Service":"/RioMDKPOC/Services/RioFormsMDK.service","DefiningRequests":[{"Name":"Form","Query":"Form"},{"Name":"Questions","Query":"Questions"},{"Name":"QuestionTypes","Query":"QuestionTypes"},{"Name":"FormRecord","Query":"FormRecord"},{"Name":"AnswerRecord","Query":"AnswerRecord"}]}

/***/ }),

/***/ "./build.definitions/RioMDKPOC/Actions/RioFormsMDK/Service/DownloadOffline.action":
/*!****************************************************************************************!*\
  !*** ./build.definitions/RioMDKPOC/Actions/RioFormsMDK/Service/DownloadOffline.action ***!
  \****************************************************************************************/
/***/ ((module) => {

module.exports = {"Service":"/RioMDKPOC/Services/RioFormsMDK.service","DefiningRequests":[{"Name":"AnswerRecord","Query":"AnswerRecord"},{"Name":"Form","Query":"Form"},{"Name":"FormRecord","Query":"FormRecord"},{"Name":"Questions","Query":"Questions"},{"Name":"QuestionTypes","Query":"QuestionTypes"}],"_Type":"Action.Type.OfflineOData.Download","ActionResult":{"_Name":"sync"},"OnFailure":"/RioMDKPOC/Actions/RioFormsMDK/Service/SyncFailureMessage.action","OnSuccess":"/RioMDKPOC/Rules/RioFormsMDK/ErrorArchive_CheckForSyncError.js"}

/***/ }),

/***/ "./build.definitions/RioMDKPOC/Actions/RioFormsMDK/Service/DownloadOffline_Silent.action":
/*!***********************************************************************************************!*\
  !*** ./build.definitions/RioMDKPOC/Actions/RioFormsMDK/Service/DownloadOffline_Silent.action ***!
  \***********************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.OfflineOData.Download","_Name":"DownloadOffline_Silent","Service":"/RioMDKPOC/Services/RioFormsMDK.service","DefiningRequests":[{"Name":"Form","Query":"Form"},{"Name":"Questions","Query":"Questions"},{"Name":"QuestionTypes","Query":"QuestionTypes"},{"Name":"FormRecord","Query":"FormRecord"},{"Name":"AnswerRecord","Query":"AnswerRecord"}]}

/***/ }),

/***/ "./build.definitions/RioMDKPOC/Actions/RioFormsMDK/Service/DownloadStartedMessage.action":
/*!***********************************************************************************************!*\
  !*** ./build.definitions/RioMDKPOC/Actions/RioFormsMDK/Service/DownloadStartedMessage.action ***!
  \***********************************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Download in progress...","CompletionMessage":"Download Successful","CompletionTimeout":7,"OnSuccess":"/RioMDKPOC/Actions/RioFormsMDK/Service/DownloadOffline.action","_Type":"Action.Type.ProgressBanner"}

/***/ }),

/***/ "./build.definitions/RioMDKPOC/Actions/RioFormsMDK/Service/InitializeOffline.action":
/*!******************************************************************************************!*\
  !*** ./build.definitions/RioMDKPOC/Actions/RioFormsMDK/Service/InitializeOffline.action ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = {"Service":"/RioMDKPOC/Services/RioFormsMDK.service","DefiningRequests":[{"Name":"AnswerRecord","Query":"AnswerRecord"},{"Name":"Form","Query":"Form"},{"Name":"FormRecord","Query":"FormRecord"},{"Name":"Questions","Query":"Questions"},{"Name":"QuestionTypes","Query":"QuestionTypes"}],"_Type":"Action.Type.ODataService.Initialize","ShowActivityIndicator":true,"ActivityIndicatorText":"Downloading...","ActionResult":{"_Name":"init"},"OnFailure":"/RioMDKPOC/Actions/RioFormsMDK/Service/InitializeOfflineFailureMessage.action"}

/***/ }),

/***/ "./build.definitions/RioMDKPOC/Actions/RioFormsMDK/Service/InitializeOfflineFailureMessage.action":
/*!********************************************************************************************************!*\
  !*** ./build.definitions/RioMDKPOC/Actions/RioFormsMDK/Service/InitializeOfflineFailureMessage.action ***!
  \********************************************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Failed to initialize application data service - {#ActionResults:init/error}","Duration":7,"Animated":true,"_Type":"Action.Type.BannerMessage"}

/***/ }),

/***/ "./build.definitions/RioMDKPOC/Actions/RioFormsMDK/Service/InitializeOnlineWeb.action":
/*!********************************************************************************************!*\
  !*** ./build.definitions/RioMDKPOC/Actions/RioFormsMDK/Service/InitializeOnlineWeb.action ***!
  \********************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ODataService.Initialize","Target":{"Service":"/RioMDKPOC/Services/RioFormsMDK.service"},"ActionResult":{"_Name":"initWeb"}}

/***/ }),

/***/ "./build.definitions/RioMDKPOC/Actions/RioFormsMDK/Service/SyncFailureMessage.action":
/*!*******************************************************************************************!*\
  !*** ./build.definitions/RioMDKPOC/Actions/RioFormsMDK/Service/SyncFailureMessage.action ***!
  \*******************************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Sync offline data service failure - {#ActionResults:sync/error}","Duration":7,"Animated":true,"_Type":"Action.Type.BannerMessage"}

/***/ }),

/***/ "./build.definitions/RioMDKPOC/Actions/RioFormsMDK/Service/SyncStartedMessage.action":
/*!*******************************************************************************************!*\
  !*** ./build.definitions/RioMDKPOC/Actions/RioFormsMDK/Service/SyncStartedMessage.action ***!
  \*******************************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Upload in progress...","CompletionMessage":"Sync completed","CompletionTimeout":7,"OnSuccess":"/RioMDKPOC/Actions/RioFormsMDK/Service/UploadOffline.action","OnFailure":"/RioMDKPOC/Actions/RioFormsMDK/Service/SyncFailureMessage.action","_Type":"Action.Type.ProgressBanner"}

/***/ }),

/***/ "./build.definitions/RioMDKPOC/Actions/RioFormsMDK/Service/UploadOffline.action":
/*!**************************************************************************************!*\
  !*** ./build.definitions/RioMDKPOC/Actions/RioFormsMDK/Service/UploadOffline.action ***!
  \**************************************************************************************/
/***/ ((module) => {

module.exports = {"Service":"/RioMDKPOC/Services/RioFormsMDK.service","_Type":"Action.Type.OfflineOData.Upload","ActionResult":{"_Name":"sync"},"OnSuccess":"/RioMDKPOC/Actions/RioFormsMDK/Service/DownloadStartedMessage.action","OnFailure":"/RioMDKPOC/Actions/RioFormsMDK/Service/SyncFailureMessage.action"}

/***/ }),

/***/ "./build.definitions/RioMDKPOC/Actions/RioFormsMDK/Service/UploadOffline_Silent.action":
/*!*********************************************************************************************!*\
  !*** ./build.definitions/RioMDKPOC/Actions/RioFormsMDK/Service/UploadOffline_Silent.action ***!
  \*********************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.OfflineOData.Upload","_Name":"UploadOffline_Silent","Service":"/RioMDKPOC/Services/RioFormsMDK.service"}

/***/ }),

/***/ "./build.definitions/RioMDKPOC/Actions/Submit/AutoSync_AfterCS.action":
/*!****************************************************************************!*\
  !*** ./build.definitions/RioMDKPOC/Actions/Submit/AutoSync_AfterCS.action ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.OfflineOData.Upload","_Name":"AutoSync_AfterCS","Service":"/RioMDKPOC/Services/RioFormsMDK.service","OnSuccess":"/RioMDKPOC/Actions/RioFormsMDK/Service/DownloadAfterUpload.action"}

/***/ }),

/***/ "./build.definitions/RioMDKPOC/Actions/Submit/SubmitParentAndChildren_CS.action":
/*!**************************************************************************************!*\
  !*** ./build.definitions/RioMDKPOC/Actions/Submit/SubmitParentAndChildren_CS.action ***!
  \**************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ODataService.ChangeSet","_Name":"SubmitParentAndChildren_CS","Target":{"Service":"/RioMDKPOC/Services/RioFormsMDK.service"},"Actions":["/RioMDKPOC/Actions/OData/CreateFormRecord_Minimal.action","/RioMDKPOC/Rules/BuildChildren_InCS.js"],"OnSuccess":"/RioMDKPOC/Actions/Submit/AutoSync_AfterCS.action"}

/***/ }),

/***/ "./build.definitions/RioMDKPOC/Actions/Util/AlertMessage.action":
/*!**********************************************************************!*\
  !*** ./build.definitions/RioMDKPOC/Actions/Util/AlertMessage.action ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Message","_Name":"AlertMessage","Title":"Debug","Message":"Info","OKCaption":"OK"}

/***/ }),

/***/ "./build.definitions/RioMDKPOC/Actions/Util/Alert_ChangeSetFail.action":
/*!*****************************************************************************!*\
  !*** ./build.definitions/RioMDKPOC/Actions/Util/Alert_ChangeSetFail.action ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Message","_Name":"Alert_ChangeSetFail","Title":"Submit","Message":"ChangeSet failed. See error archive / logs.","OKCaption":"OK"}

/***/ }),

/***/ "./build.definitions/RioMDKPOC/Actions/Util/Alert_ChangeSetOK.action":
/*!***************************************************************************!*\
  !*** ./build.definitions/RioMDKPOC/Actions/Util/Alert_ChangeSetOK.action ***!
  \***************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Message","_Name":"Alert_ChangeSetOK","Title":"Submit","Message":"ChangeSet queued OK (offline).","OKCaption":"OK"}

/***/ }),

/***/ "./build.definitions/RioMDKPOC/Actions/Util/Alert_OfflineQueued.action":
/*!*****************************************************************************!*\
  !*** ./build.definitions/RioMDKPOC/Actions/Util/Alert_OfflineQueued.action ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Message","_Name":"Alert_OfflineQueued","Title":"Submit","Message":"Saved offline. Use User Menu -> Sync when online.","OKCaption":"OK"}

/***/ }),

/***/ "./build.definitions/RioMDKPOC/Actions/Util/Alert_SubmitSyncedOK.action":
/*!******************************************************************************!*\
  !*** ./build.definitions/RioMDKPOC/Actions/Util/Alert_SubmitSyncedOK.action ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Message","_Name":"Alert_SubmitSyncedOK","Title":"Submit","Message":"Submitted and synced to server.","OKCaption":"OK"}

/***/ }),

/***/ "./build.definitions/RioMDKPOC/Actions/Util/ToastMessage.action":
/*!**********************************************************************!*\
  !*** ./build.definitions/RioMDKPOC/Actions/Util/ToastMessage.action ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ToastMessage","_Name":"ToastMessage","Message":"OK"}

/***/ }),

/***/ "./build.definitions/RioMDKPOC/Actions/Util/Toast_ChangeSetFail.action":
/*!*****************************************************************************!*\
  !*** ./build.definitions/RioMDKPOC/Actions/Util/Toast_ChangeSetFail.action ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ToastMessage","_Name":"Toast_ChangeSetFail","Message":"ChangeSet failed. See error archive / sync logs."}

/***/ }),

/***/ "./build.definitions/RioMDKPOC/Actions/Util/Toast_ChangeSetOK.action":
/*!***************************************************************************!*\
  !*** ./build.definitions/RioMDKPOC/Actions/Util/Toast_ChangeSetOK.action ***!
  \***************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ToastMessage","_Name":"Toast_ChangeSetOK","Message":"ChangeSet queued OK (offline)."}

/***/ }),

/***/ "./build.definitions/RioMDKPOC/Fragments/QuestionSection.fragment":
/*!************************************************************************!*\
  !*** ./build.definitions/RioMDKPOC/Fragments/QuestionSection.fragment ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Section.Type.FormCell","_Name":"QuestionSectionTemplate","Header":{"Caption":"{question}"},"Controls":[{"_Type":"Control.Type.FormCell.SimpleProperty","_Name":"Q_Text","Caption":"Answer","IsEditable":true,"Value":"","IsVisible":"/RioMDKPOC/Rules/Vis/IsText.js"},{"_Type":"Control.Type.FormCell.Switch","_Name":"Q_Bool","Caption":"Yes / No","Value":false,"IsVisible":"/RioMDKPOC/Rules/Vis/IsBool.js"}]}

/***/ }),

/***/ "./build.definitions/RioMDKPOC/Globals/Application/AppDefinition_Version.global":
/*!**************************************************************************************!*\
  !*** ./build.definitions/RioMDKPOC/Globals/Application/AppDefinition_Version.global ***!
  \**************************************************************************************/
/***/ ((module) => {

module.exports = {"Value":"1.0.0","_Type":"String"}

/***/ }),

/***/ "./build.definitions/RioMDKPOC/Globals/Application/ApplicationName.global":
/*!********************************************************************************!*\
  !*** ./build.definitions/RioMDKPOC/Globals/Application/ApplicationName.global ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = {"Value":"MDK App","_Type":"String"}

/***/ }),

/***/ "./build.definitions/RioMDKPOC/Globals/Application/SupportEmail.global":
/*!*****************************************************************************!*\
  !*** ./build.definitions/RioMDKPOC/Globals/Application/SupportEmail.global ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = {"Value":"support@mycompany.com","_Type":"String"}

/***/ }),

/***/ "./build.definitions/RioMDKPOC/Globals/Application/SupportPhone.global":
/*!*****************************************************************************!*\
  !*** ./build.definitions/RioMDKPOC/Globals/Application/SupportPhone.global ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = {"Value":"1-800-677-7271","_Type":"String"}

/***/ }),

/***/ "./build.definitions/RioMDKPOC/Services/RioFormsMDK.service":
/*!******************************************************************!*\
  !*** ./build.definitions/RioMDKPOC/Services/RioFormsMDK.service ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = {"DestinationName":"RioFormsMDK","OfflineEnabled":true,"_Type":"Service.OData","_Name":"RioFormsMDK.service","SourceType":"Mobile"}

/***/ }),

/***/ "./build.definitions/version.mdkbundlerversion":
/*!*****************************************************!*\
  !*** ./build.definitions/version.mdkbundlerversion ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = "1.1\n";

/***/ }),

/***/ "@nativescript/core/application-settings":
/*!**********************************************************!*\
  !*** external "@nativescript/core/application-settings" ***!
  \**********************************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__nativescript_core_application_settings__;

/***/ }),

/***/ "@nativescript/core/connectivity":
/*!**************************************************!*\
  !*** external "@nativescript/core/connectivity" ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__nativescript_core_connectivity__;

/***/ }),

/***/ "./build.definitions/RioMDKPOC/Styles/Styles.json":
/*!********************************************************!*\
  !*** ./build.definitions/RioMDKPOC/Styles/Styles.json ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"ActionBar":{"background-color":"#E10600","font-color":"#FFFFFF"}}');

/***/ }),

/***/ "./build.definitions/RioMDKPOC/Styles/Styles.light.json":
/*!**************************************************************!*\
  !*** ./build.definitions/RioMDKPOC/Styles/Styles.light.json ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"AppTheme/BackgroundColor":"#FFFFFF","AppTheme/TextColor":"#1A1A1A","ActionBar/BackgroundColor":"#E10600","ActionBar/TitleColor":"#FFFFFF","ActionBar/IconColor":"#FFFFFF","Button/BackgroundColor":"#E10600","Button/TextColor":"#FFFFFF","Button/CornerRadius":10,"FormCell/LabelTextColor":"#1A1A1A","FormCell/ValueTextColor":"#1A1A1A","FormCell/TintColor":"#E10600","FormCell/SeparatorColor":"#F0F0F0","Switch/OnTintColor":"#E10600","Switch/ThumbTintColor":"#FFFFFF","ListView/SeparatorColor":"#EFEFEF","ObjectCell/TitleTextColor":"#1A1A1A","ObjectCell/StatusTextColor":"#E10600","Search/BarTintColor":"#FFFFFF","Search/TintColor":"#E10600"}');

/***/ }),

/***/ "./build.definitions/RioMDKPOC/jsconfig.json":
/*!***************************************************!*\
  !*** ./build.definitions/RioMDKPOC/jsconfig.json ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"include":["Rules/**/*",".typings/**/*"]}');

/***/ }),

/***/ "./build.definitions/tsconfig.json":
/*!*****************************************!*\
  !*** ./build.definitions/tsconfig.json ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"compilerOptions":{"module":"esnext","target":"es2019","moduleResolution":"node","lib":["esnext","dom"],"experimentalDecorators":true,"emitDecoratorMetadata":true,"removeComments":true,"inlineSourceMap":true,"noEmitOnError":false,"noEmitHelpers":true,"baseUrl":".","plugins":[{"transform":"@nativescript/webpack/dist/transformers/NativeClass","type":"raw"}]},"exclude":["node_modules"]}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./build.definitions/application-index.js");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=bundle.js.map