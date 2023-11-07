const phones: {
    [k: string]: {
        customerId: string
        areaCode: string
        num: string
    }
} = {};

phones.home
phones.work
phones.fax
phones.mobile

const phoneList = [
    { customerId: "0001", areaCode: "321", num: "123-4566" },
    { customerId: "0002", areaCode: "174", num: "142-3626" },
    { customerId: "0003", areaCode: "192", num: "012-7190" },
    { customerId: "0005", areaCode: "402", num: "652-5782" },
    { customerId: "0004", areaCode: "301", num: "184-8501" },
];

const phoneDict = {
    "0001": {
        customerId: "0001",
        areaCode: "321",
        num: "123-4566",
    },
    "0002": {
        customerId: "0002",
        areaCode: "174",
        num: "142-3626",
    },
    /*... and so on */
}

interface PhoneInfo {
    customerId: string
    areaCode: string
    num: string
}

function listToDict<T>(
    list: T[], // take the list as an argument
    idGen: (arg: T) => string // a callback to get Ids
): { [k: string]: T } {
    // create an empty dictionary
    const dict: { [k: string]: T } = {}

    // Loop through the array
    list.forEach((element) => {
        const dictKey = idGen(element)
        dict[dictKey] = element // store element under key
    })

    // return the dictionary
    return dict
}

console.log(listToDict(phoneList, (item) => item.customerId))