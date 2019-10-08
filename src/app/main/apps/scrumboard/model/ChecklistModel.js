import {FuseUtils} from '@fuse';

class ChecklistModel {
    constructor(data)
    {
        const item = data ? data : {};

        // this.id = item.id || FuseUtils.generateGUID();
        // this.id = item.id;
        this.name = item.name || '';
        this.checkItems = item.checkItems || [];
    }
}

export default ChecklistModel;
