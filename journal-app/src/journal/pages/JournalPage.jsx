import { Typography }    from "@mui/material";
import { JournalLayout } from "../layout/JournalLayout";

export const JournalPage = () => {

    return (
        <JournalLayout>
            <Typography variant='h4'>
                <span><hr /><hr /></span>
                Lorem Ipsum is simply dummy text of the printing
                and typesetting industry. Lorem Ipsum has been the industry's standard
                dummy text ever since the 1500s, when an unknown printer took a galley
            </Typography>
        </JournalLayout>
    );
}

export default JournalPage;