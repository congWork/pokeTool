angular.module("filters", [])
    .filter("selectedPokeOnly",
        function () {
            var isInList = function(myList,currentName) {
                for (var i = 0; i < myList.length; i++) {
                    if (myList[i].toLowerCase() === currentName.toLowerCase()) {
                        return true;
                    }
                }
                return false;
            };
            return function(items,wantedPokeList) {
                var result = [];
                angular.forEach(items,
                    function(item) {
                        if (isInList(wantedPokeList,item.name)) {
                            result.push(item);
                        }
                    });
                return result;
            }
        });
