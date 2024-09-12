import { Flex } from "@sanity/ui"


export function InstrumentInput(props) {
    console.log(props)
    return (
        <Flex gap={3} paddingRight={2} align='center'>
            <Card padding={4}>
                <Stack>
                    <Select
                    fontSize={[2, 2, 3, 4]}
                    padding={[3, 3, 4]}
                    space={[3, 3, 4]}
                    >
                    <optgroup label="Swedish cars">
                        <option>Saab</option>
                        <option>Volvo</option>
                    </optgroup>

                    <optgroup label="Norwegian cars">
                        <option>Buddy</option>
                        <option>Think</option>
                    </optgroup>
                    </Select>
                </Stack>
            </Card>
        </Flex>
    )
}