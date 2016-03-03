/// <reference path="./typings/main.d.ts" />
var plugins = {
    beautylog: require("beautylog")
};
var c9workspace = {
    isC9: false,
    name: "undefined",
    owner: "undefined",
    ideUrl: "undefined",
    serveUrl: "undefined"
};
(function () {
    c9workspace.isC9 = (function () { if (process.env.C9_USER === undefined) {
        return false;
    }
    else {
        return true;
    } })();
    c9workspace.name = process.env.C9_PROJECT;
    c9workspace.owner = process.env.C9_USER;
    c9workspace.ideUrl = (function () {
        if (c9workspace.isC9) {
            return "https://ide.c9.io/" + process.env.C9_USER + "/" + c9workspace.name;
        }
        else {
            return undefined;
        }
    })();
    c9workspace.serveUrl = process.env.C9_HOSTNAME;
})();
var c9config = {
    isC9: c9workspace.isC9,
    print: function () {
        var reportTable = plugins.beautylog.table.new("custom", ["c9 propertyName".cyan, "c9 value".cyan]);
        for (var key in c9workspace) {
            reportTable.push([key, c9workspace[key]]);
        }
        reportTable.print();
    },
    workspace: c9workspace
};
module.exports = c9config;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDRDQUE0QztBQUM1QyxJQUFJLE9BQU8sR0FBRztJQUNWLFNBQVMsRUFBRSxPQUFPLENBQUMsV0FBVyxDQUFDO0NBQ2xDLENBQUE7QUFFRCxJQUFJLFdBQVcsR0FBRztJQUNkLElBQUksRUFBRSxLQUFLO0lBQ1gsSUFBSSxFQUFFLFdBQVc7SUFDakIsS0FBSyxFQUFHLFdBQVc7SUFDbkIsTUFBTSxFQUFFLFdBQVc7SUFDbkIsUUFBUSxFQUFFLFdBQVc7Q0FDeEIsQ0FBQztBQUVGLENBQUM7SUFDRyxXQUFXLENBQUMsSUFBSSxHQUFHLENBQUMsY0FBVyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDO1FBQUEsTUFBTSxDQUFDLEtBQUssQ0FBQTtJQUFBLENBQUM7SUFBQyxJQUFJLENBQUMsQ0FBQztRQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUE7SUFBQSxDQUFDLENBQUEsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUM3RyxXQUFXLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDO0lBQzFDLFdBQVcsQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUM7SUFDeEMsV0FBVyxDQUFDLE1BQU0sR0FBRyxDQUFDO1FBQ2xCLEVBQUUsQ0FBQSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQSxDQUFDO1lBQ2pCLE1BQU0sQ0FBQyxvQkFBb0IsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sR0FBRyxHQUFHLEdBQUcsV0FBVyxDQUFDLElBQUksQ0FBQztRQUMvRSxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDSixNQUFNLENBQUMsU0FBUyxDQUFDO1FBQ3JCLENBQUM7SUFDTCxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQ0wsV0FBVyxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQztBQUNuRCxDQUFDLENBQUMsRUFBRSxDQUFDO0FBRUwsSUFBSSxRQUFRLEdBQUc7SUFDWCxJQUFJLEVBQUUsV0FBVyxDQUFDLElBQUk7SUFDdEIsS0FBSyxFQUFFO1FBQ0gsSUFBSSxXQUFXLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBQyxDQUFDLGlCQUFpQixDQUFDLElBQUksRUFBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUNqRyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLFdBQVcsQ0FBQyxDQUFBLENBQUM7WUFDekIsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzdDLENBQUM7UUFDRCxXQUFXLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUNELFNBQVMsRUFBRSxXQUFXO0NBQ3pCLENBQUM7QUFFRixNQUFNLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL3R5cGluZ3MvbWFpbi5kLnRzXCIgLz5cbnZhciBwbHVnaW5zID0ge1xuICAgIGJlYXV0eWxvZzogcmVxdWlyZShcImJlYXV0eWxvZ1wiKVxufVxuXG5sZXQgYzl3b3Jrc3BhY2UgPSB7XG4gICAgaXNDOTogZmFsc2UsXG4gICAgbmFtZTogXCJ1bmRlZmluZWRcIixcbiAgICBvd25lcjogIFwidW5kZWZpbmVkXCIsXG4gICAgaWRlVXJsOiBcInVuZGVmaW5lZFwiLFxuICAgIHNlcnZlVXJsOiBcInVuZGVmaW5lZFwiXG59O1xuXG4oZnVuY3Rpb24oKXtcbiAgICBjOXdvcmtzcGFjZS5pc0M5ID0gKGZ1bmN0aW9uKCl7aWYgKHByb2Nlc3MuZW52LkM5X1VTRVIgPT09IHVuZGVmaW5lZCkge3JldHVybiBmYWxzZX0gZWxzZSB7IHJldHVybiB0cnVlfX0pKCk7XG4gICAgYzl3b3Jrc3BhY2UubmFtZSA9IHByb2Nlc3MuZW52LkM5X1BST0pFQ1Q7XG4gICAgYzl3b3Jrc3BhY2Uub3duZXIgPSBwcm9jZXNzLmVudi5DOV9VU0VSO1xuICAgIGM5d29ya3NwYWNlLmlkZVVybCA9IChmdW5jdGlvbigpe1xuICAgICAgICBpZihjOXdvcmtzcGFjZS5pc0M5KXtcbiAgICAgICAgICAgIHJldHVybiBcImh0dHBzOi8vaWRlLmM5LmlvL1wiICsgcHJvY2Vzcy5lbnYuQzlfVVNFUiArIFwiL1wiICsgYzl3b3Jrc3BhY2UubmFtZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICB9KSgpO1xuICAgIGM5d29ya3NwYWNlLnNlcnZlVXJsID0gcHJvY2Vzcy5lbnYuQzlfSE9TVE5BTUU7XG59KSgpO1xuXG52YXIgYzljb25maWcgPSB7XG4gICAgaXNDOTogYzl3b3Jrc3BhY2UuaXNDOSxcbiAgICBwcmludDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciByZXBvcnRUYWJsZSA9IHBsdWdpbnMuYmVhdXR5bG9nLnRhYmxlLm5ldyhcImN1c3RvbVwiLFtcImM5IHByb3BlcnR5TmFtZVwiLmN5YW4sXCJjOSB2YWx1ZVwiLmN5YW5dKTtcbiAgICAgICAgZm9yICh2YXIga2V5IGluIGM5d29ya3NwYWNlKXtcbiAgICAgICAgICAgIHJlcG9ydFRhYmxlLnB1c2goW2tleSxjOXdvcmtzcGFjZVtrZXldXSk7XG4gICAgICAgIH1cbiAgICAgICAgcmVwb3J0VGFibGUucHJpbnQoKTtcbiAgICB9LFxuICAgIHdvcmtzcGFjZTogYzl3b3Jrc3BhY2Vcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gYzljb25maWc7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
