import {FuseUtils} from '@fuse';

function MemberModel(data) {
    const item = data ? data : {};
    return {
        id: item.id || FuseUtils.generateGUID(),
        name: item.email || '',
        get handle() {
            return FuseUtils.handleize(this.email)
        }
    }
}

export default MemberModel;
