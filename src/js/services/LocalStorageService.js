class localStorageService {
    static getSpecificItem(item){
        return JSON.parse(localStorageService.getSpecificItem(item))
    }

    static setSpecificItem(item, data){
        localStorageService.setSpecificItem(item,JSON.stringify(data))
    }
    static remeveSpecificItem(item){
        localStorageService.removeItem(item)
    }
}

export default localStorageService;