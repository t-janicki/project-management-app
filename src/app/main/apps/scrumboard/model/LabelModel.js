import {FuseUtils} from '@fuse';

class LabelModel {
    constructor(data)
    {
        const label = data ? data : {};

        // this.id = label.id || FuseUtils.generateGUID();
        this.id = label.id;
        this.name = label.name || '';
        this.className = label.className;
    }
}

export default LabelModel;
