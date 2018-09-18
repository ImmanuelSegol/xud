import Packet, { PacketDirection } from '../Packet';
import PacketType from '../PacketType';
import { SwapRejectionReason } from '../../../types/enums';

// TODO: proper error handling
export type SwapResponsePacketBody = {
  r_hash: string;
  /** If the swap is accepted, the specifies the accepted quantity (which may be less than the proposed quantity). */
  quantity?: number;
  /** If the swap is rejected, this provides a reason for why it was rejected. */
  rejectionReason?: SwapRejectionReason;
};

class SwapResponsePacket extends Packet<SwapResponsePacketBody> {
  public get type() {
    return PacketType.SWAP_RESPONSE;
  }

  public get direction() {
    return PacketDirection.RESPONSE;
  }
}

export default SwapResponsePacket;
