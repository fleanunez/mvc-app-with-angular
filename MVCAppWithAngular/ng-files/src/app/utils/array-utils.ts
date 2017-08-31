export class ArrayUtils {
    static convertArrayKeysToLowerCase(array: any[]): any[] {
        var newArray = [];
        for (var i = 0; i < array.length; i++) {

            var key, keys = Object.keys(array[i]);
            var numberOfKeys = keys.length;
            var newObj = {};
            while (numberOfKeys--) {
                key = keys[numberOfKeys];
                newObj[key.toLowerCase()] = array[i][key];
            }
            newArray.push(newObj);
        }
        return newArray;
    }

    static CastArray<T>(array: any[]): T[] {
        return array as T[];
    }
}
