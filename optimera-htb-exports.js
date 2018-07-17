/**
 *  This file contains any necessary functions that need to be exposed to the outside world.
 *  Things like (render functions) will be exposed by adding them to the shellInterface variable, under the partners
 *  profile name. This function will then be accessible through the window.headertag.OptimeraHtb object.
 *  If necessary for backwards compatibility with old creatives, you can also add things directly to the
 *  window namespace here, but this is discouraged if it's not strictly needed.
 */

//? if (FEATURES.GPT_LINE_ITEMS) {
shellInterface.OptimeraHtb = {
    render: SpaceCamp.services.RenderService.renderDfpAd.bind(null, 'OptimeraHtb'),
    config: __directInterface.Layers.PartnersLayer.Partners.OptimeraHtb.__getSite()
};
//? }

if (__directInterface.Layers.PartnersLayer.Partners.OptimeraHtb) {
    shellInterface.OptimeraHtb = shellInterface.OptimeraHtb || {};
    shellInterface.OptimeraHtb.adResponseCallback = __directInterface.Layers.PartnersLayer.Partners.OptimeraHtb.adResponseCallback;
}
