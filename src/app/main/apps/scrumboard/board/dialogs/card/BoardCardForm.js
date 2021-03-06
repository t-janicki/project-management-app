import React, {useCallback} from 'react';
import {
    TextField,
    DialogContent,
    DialogTitle,
    Icon,
    IconButton,
    Typography,
    Toolbar,
    AppBar,
    Avatar,
    InputAdornment,
    Tooltip,
    List
} from '@material-ui/core';
import {FuseChipSelect} from '@fuse';
import {useForm, useDebounce, useUpdateEffect} from '@fuse/hooks';
import _ from '@lodash';
import moment from 'moment';
import {useDispatch, useSelector} from 'react-redux';
import * as Actions from '../../../../../../../app/main/apps/scrumboard/store/actions/index';
import DueMenu from './toolbar/DueMenu';
import CheckListMenu from './toolbar/CheckListMenu';
import CardOptionsMenu from './toolbar/CardOptionsMenu';
import CardChecklist from './checklist/CardChecklist';
import CardActivity from './activity/CardActivity';
import CardComment from './comment/CardComment';

function BoardCardForm(props) {
    const dispatch = useDispatch();
    const card = useSelector(({scrumboardApp}) => scrumboardApp.card.data);
    const board = useSelector(({scrumboardApp}) => scrumboardApp.board.data);

    const {form: cardForm, handleChange, setForm, setInForm} = useForm(card);

    const updateCard = useDebounce((boardId, newCard) => {
        dispatch(Actions.updateCard(boardId, {...newCard}));
    }, 600);

    const dueDate = cardForm && cardForm.dueDate ? moment(cardForm.dueDate).format(moment.HTML5_FMT.DATE) : "";

    const cardId = card === null ? '' : card.id;

    const labelsIds = cardForm.idLabels.map(labelId => parseInt(labelId));
    const boardLabelsIds = board.labels.map(label => label.id);

    const filteredIds = boardLabelsIds.filter(id => !labelsIds.includes(id));
    let availableLabels = [];
    filteredIds.forEach(id => {
        const label = board.labels.find(v => v.id === id);
        availableLabels.push(label);
    });

    useUpdateEffect(() => {
        updateCard(board.id, cardForm);
    }, [dispatch, board.id, cardForm, updateCard]);

    function removeDue() {
        setInForm('dueDate', null);
    }

    // function toggleLabel(labelId) {
    //     setInForm('idLabels', _.xor(cardForm.idLabels, [labelId]));
    // }

    // function toggleMember(memberId) {
    //     setInForm('idMembers', _.xor(cardForm.idMembers, [memberId]));
    // }

    function addCheckList(newList) {
        setInForm('checklists', [...cardForm.checklists, newList]);
    }

    function chipChange(name, value) {
        setInForm(name, value.map(item => item.value));
    }

    function addNewChip(name, value) {
        setInForm(name, [...cardForm[name], value]);
    }

    // function makeCover(attachmentId) {
    //     setInForm('idAttachmentCover', attachmentId);
    // }
    //
    // function removeCover() {
    //     setInForm('idAttachmentCover', '');
    // }
    //
    // function removeAttachment(attachmentId) {
    //     setForm(
    //         {
    //             ...cardForm,
    //             attachments: _.reject(cardForm.attachments, {id: attachmentId}),
    //             idAttachmentCover: cardForm.idAttachmentCover === attachmentId ? '' : cardForm.idAttachmentCover
    //         }
    //     );
    // }

    const handleCheckListChange = useCallback((item, index) => {
        setInForm(`checklists[${index}]`, item);
    }, [setInForm]);

    function removeCheckList(id) {
        setInForm('checklists', _.reject(cardForm.checklists, {id: id}));
    }

    function commentAdd(comment) {
        return setInForm('activities', [comment, ...cardForm.activities]);
    }

    return (
        <>
            <DialogTitle component="div" className="p-0">
                <AppBar position="static" elevation={1}>
                    <Toolbar className="flex w-full overflow-x-auto px-8 sm:px-16">
                        <div className="flex flex-1">

                            <DueMenu
                                onDueChange={handleChange}
                                onRemoveDue={removeDue}
                                dueDate={dueDate}
                            />

                            {/*<IconButton color="inherit">*/}
                            {/*    <Icon>attachment</Icon>*/}
                            {/*</IconButton>*/}

                            <CheckListMenu
                                onAddCheckList={addCheckList}
                            />

                            <CardOptionsMenu
                                cardFormId={cardForm.id}
                                boardId={board.id}
                            />

                        </div>
                        <IconButton color="inherit" onClick={ev => dispatch(Actions.closeCardDialog())}>
                            <Icon>close</Icon>
                        </IconButton>
                    </Toolbar>
                </AppBar>
            </DialogTitle>

            <DialogContent className="p-16 sm:p-24">
                <div className="flex flex-col sm:flex-row sm:justify-between justify-center items-center mb-24">
                    <div className="mb-16 sm:mb-0 flex items-center">
                        <Typography>{board.name}</Typography>
                        <Icon className="text-20" color="inherit">chevron_right</Icon>
                        {React.useMemo(() => {
                            const list = card ? _.find(board.lists, (_list) => _list.idCards.includes(card.id)) : null;

                            return (
                                <Typography>{list && list.name}</Typography>
                            )
                        }, [board, card])}
                    </div>

                    {cardForm.dueDate && (
                        <TextField
                            label="Due date"
                            type="date"
                            name="dueDate"
                            value={dueDate}
                            onChange={handleChange}
                            placeholder=" Choose a due date"
                            className="w-full sm:w-auto"
                            InputLabelProps={{
                                shrink: true
                            }}
                            variant="outlined"
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <Icon color="action">today</Icon>
                                    </InputAdornment>
                                )
                            }}
                        />
                    )}
                </div>

                <div className="flex items-center mb-24">
                    <TextField
                        label="Title"
                        type="text"
                        name="name"
                        value={cardForm.name}
                        onChange={handleChange}
                        variant="outlined"
                        fullWidth
                        required
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    {cardForm.subscribed && (
                                        <Icon className="text-20" color="action">remove_red_eye</Icon>
                                    )}
                                </InputAdornment>
                            )
                        }}
                    />
                </div>

                <div className="w-full mb-24">
                    <TextField
                        label="Description"
                        name="description"
                        multiline
                        rows="4"
                        value={cardForm.description}
                        onChange={handleChange}
                        variant="outlined"
                        fullWidth
                    />
                </div>

                <div className="w-full mb-24">
                    <div className="flex-1 mb-24">
                        <div className="flex items-center mt-16 mb-12">
                            <Icon className="text-20 mr-8" color="inherit">label</Icon>
                            <Typography className="font-600 text-16">Labels</Typography>
                        </div>
                        <FuseChipSelect
                            className={cardForm.idMembers.length > 0 && 'sm:mr-8'}
                            value={
                                cardForm.idLabels.map(labelId => {
                                    // const label = _.find(board.labels, {id: labelId});
                                    const label = board.labels.find(v => v.id == labelId);
                                    return label && {
                                        value: labelId,
                                        label: label.name,
                                        class: label.className
                                    }
                                })
                            }
                            onChange={(value) => chipChange('idLabels', value)}
                            placeholder="Select multiple Labels"
                            isMulti
                            textFieldProps={{
                                variant: "outlined"
                            }}
                            // const label = board.labels.filter(v => v.id == id).map(x => x.label);
                            options={availableLabels.map((label) => (
                                {
                                    value: label.id,
                                    label: label.name,
                                    class: label.className
                                }
                            ))}
                            onCreateOption={(name) => {

                                const boardId = board.id;
                                dispatch(Actions.newLabel({name, boardId})).then((data) => {
                                    addNewChip('idLabels', data.id);

                                    return data.id;
                                });

                            }}
                        />
                    </div>

                    {board.boardType === 'TEAM' && (
                        <div className="w-full mb-24">
                            <div className="flex items-center mt-16 mb-12">
                                <Icon className="text-20 mr-8" color="inherit">supervisor_account</Icon>
                                <Typography className="font-600 text-16">Members</Typography>
                            </div>
                            <FuseChipSelect
                                className={cardForm.idLabels.length > 0 && 'sm:ml-8'}
                                value={
                                    cardForm.idMembers.map(memberId => {
                                        // const member = _.find(board.members, {id: memberId});
                                        const member = props.members.find(member => member.id == memberId);
                                        return member && {
                                            value: member.id,
                                            label: (<Tooltip title={member.name}><Avatar className="-ml-12 w-32 h-32"
                                                                                         src={member.avatarUrl}/></Tooltip>)
                                        }
                                    })
                                }
                                onChange={(value) => chipChange('idMembers', value)}
                                placeholder="Select multiple Members"
                                isMulti
                                textFieldProps={{
                                    variant: "outlined"
                                }}
                                options={props.members.map((member) => (
                                    {
                                        value: member.id,
                                        label: (<span className="flex items-center"><Avatar className="w-32 h-32 mr-8"
                                                                                            src={member.avatarUrl}/>{member.name}</span>)
                                    }
                                ))}
                                variant="fixed"
                            />
                        </div>
                    )}
                </div>

                {/*{cardForm.attachments.length > 0 && (*/}
                {/*    <div className="mb-24">*/}
                {/*        <div className="flex items-center mt-16 mb-12">*/}
                {/*            <Icon className="text-20 mr-8" color="inherit">attachment</Icon>*/}
                {/*            <Typography className="font-600 text-16">Attachments</Typography>*/}
                {/*        </div>*/}
                {/*        <div className="flex flex-col sm:flex-row flex-wrap">*/}
                {/*            {cardForm.attachments.map(item => (*/}
                {/*                    <CardAttachment*/}
                {/*                        item={item}*/}
                {/*                        card={cardForm}*/}
                {/*                        makeCover={makeCover}*/}
                {/*                        removeCover={removeCover}*/}
                {/*                        removeAttachment={removeAttachment}*/}
                {/*                        key={item.id}*/}
                {/*                    />*/}
                {/*                )*/}
                {/*            )}*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*)}*/}

                {cardForm.checklists.map((checklist, index) => (
                    <CardChecklist
                        key={checklist.id}
                        checklist={checklist}
                        index={index}
                        onCheckListChange={handleCheckListChange}
                        onRemoveCheckList={() => removeCheckList(checklist.id)}
                    />
                ))}

                {/*{boardType === 'TEAM' && (*/}
                <div className="mb-24">
                    <div className="flex items-center mt-16 mb-12">
                        <Icon className="text-20 mr-8" color="inherit">comment</Icon>
                        <Typography className="font-600 text-16">Comment</Typography>
                    </div>
                    <div>
                        <CardComment
                            cardId={cardId}
                            members={board.members}
                            onCommentAdd={commentAdd}
                        />
                    </div>
                </div>
                {/*)}*/}

                {cardForm.activities.length > 0 && (
                    <div className="mb-24">
                        <div className="flex items-center mt-16">
                            <Icon className="text-20 mr-8" color="inherit">list</Icon>
                            <Typography className="font-600 text-16">Activity</Typography>
                        </div>
                        <List className="">
                            {cardForm.activities.map(item => (
                                    <CardActivity
                                        item={item}
                                        key={item.id}
                                        members={board.members}
                                    />
                                )
                            )}
                        </List>
                    </div>
                )}
            </DialogContent>
        </>
    );
}

export default BoardCardForm;
