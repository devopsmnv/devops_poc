package com.cts.sterling.ue;

import com.yantra.yfs.japi.YFSEnvironment;
import com.yantra.yfs.japi.YFSExtnPaymentCollectionInputStruct;
import com.yantra.yfs.japi.YFSExtnPaymentCollectionOutputStruct;
import com.yantra.yfs.japi.YFSUserExitException;
import com.yantra.yfs.japi.ue.YFSCollectionOthersUE;

public class CustomerCollectionOthersUE implements YFSCollectionOthersUE {

	@Override
	public YFSExtnPaymentCollectionOutputStruct collectionOthers(
			YFSEnvironment arg0, YFSExtnPaymentCollectionInputStruct inStruct)
			throws YFSUserExitException {

		System.out.println("In CustomerCollectionOthersUE");

		YFSExtnPaymentCollectionOutputStruct outStruct = new YFSExtnPaymentCollectionOutputStruct();
		outStruct.authorizationId = inStruct.authorizationId;

		System.out.println("outStruct.authorizationId::"
				+ outStruct.authorizationId);

		outStruct.tranAmount = inStruct.requestAmount;

		System.out.println("outStruct.tranAmount::" + outStruct.tranAmount);
		outStruct.authReturnCode = "APPROVED";
		
		outStruct.authCode = "A";

		outStruct.PaymentReference1 = inStruct.paymentReference1;
		System.out.println("outStruct.PaymentReference1::"
				+ outStruct.PaymentReference1);

		outStruct.PaymentReference2 = inStruct.paymentReference2;
		System.out.println("outStruct.PaymentReference2::"
				+ outStruct.PaymentReference2);

		outStruct.PaymentReference3 = inStruct.paymentReference3;
		System.out.println("outStruct.PaymentReference3::"
				+ outStruct.PaymentReference3);

		outStruct.authorizationAmount = inStruct.requestAmount;
		System.out.println("outStruct.requestAmount::"
				+ outStruct.authorizationAmount);

		outStruct.authorizationExpirationDate = "20200521131230";
		//outStruct.DisplayPaymentReference1 =inStruct.
		return null;
	}

}
