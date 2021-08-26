app.enableQE();

var qeSequence = qe.project.getActiveSequence(0);
var vanillaSequence = app.project.activeSequence;

var qeTrackOne = qeSequence.getVideoTrackAt(0);
var vanillaTrackOne = vanillaSequence.videoTracks[0];

var qeTransitionOne = qeTrackOne.getTransitionAt(1);
var vanillaTransitions = vanillaTrackOne.transitions;


var transitionList = qe.project.getVideoTransitionList();

var transitionToApply = qe.project.getVideoTransitionByName(transitionList[Math.floor(Math.random() * transitionList.length-1)]);

var item = qeTrackOne.getItemAt(0);
item.addTransition(transitionToApply, false, '00;00;10;00');